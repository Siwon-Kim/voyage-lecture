const express = require("express");
const { Server } = require("http");
const socketIo = require("socket.io");

const cookieParser = require("cookie-parser");
const app = express();
const http = Server(app);
const io = socketIo(http);
const port = 3000;

const goodsRouter = require("./routes/goods");
const UserRouter = require("./routes/users");
const AuthRouter = require("./routes/auth");

const connect = require("./schemas");
connect();

const socketIdMap = {};

function emitSamePageViewerCount() {
	const urls = Object.values(socketIdMap);
	const countByUrl = urls.reduce((val, url) => {
		if (!url) return val;
		return { ...val, [url]: val[url] ? val[url] + 1 : 1 };
	}, {});

	for (const [socketId, url] of Object.entries(socketIdMap)) {
		const count = countByUrl[url];
		io.to(socketId).emit("SAME_PAGE_VIEWER_COUNT", count);
	}
}

// 소켓 접속 시, 해당 콜백함수 실행
io.on("connection", (socket) => {
	socketIdMap[socket.id] = null;
	console.log("새로운 소켓이 연결되었습니다."); // 소켓 사용자가 접속합니다.

	socket.on("CHANGED_PAGE", (data) => {
		console.log("페이지가 변경되었음", data, socket.id);
		socketIdMap[socket.id] = data;

		emitSamePageViewerCount();
	});

	socket.on("BUY", (data) => {
		const payload = {
			nickname: data.nickname,
			goodsId: data.goodsId,
			goodsName: data.goodsName,
			date: new Date(),
		};

		console.log("클라이언트가 구매한 데이터", data, new Date());
		socket.broadcast.emit("BUY_GOODS", payload); // socket.emit과 다른 점: BUY_GOODS에 해당되는 clients에게만 전달
	});

	socket.on("disconnect", () => {
		delete socketIdMap[socket.id];
		console.log(`${socket.id}에 해당하는 사용자가 연결을 종료하였습니다.`);
		emitSamePageViewerCount();
	});
});

app.use(express.json()); // body-parser: body로 전달받은 JSON 데이터는 바로 사용할 수 없어서 이를 jsonify해주어야 함. 따라서, 다른 app.use() middleware보다 상단에 있어야함
app.use(express.urlencoded({ extended: false })); // urlencoded: 브라우저 접속시 form data를 받아올 수 있음
app.use(cookieParser());
app.use(express.static("assets")); // frontend file 열기
app.use("/api", [goodsRouter, UserRouter, AuthRouter]);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// http 모듈로 통신한다
http.listen(port, () => {
	console.log(port, "포트로 서버가 열렸어요!");
});
