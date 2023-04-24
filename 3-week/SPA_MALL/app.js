const express = require("express");
const { Server } = require("http");

const cookieParser = require("cookie-parser");
const app = express();
const http = Server(app);

const goodsRouter = require("./routes/goods");
const UserRouter = require("./routes/users");
const AuthRouter = require("./routes/auth");

const connect = require("./schemas");
connect();

app.use(express.json()); // body-parser: body로 전달받은 JSON 데이터는 바로 사용할 수 없어서 이를 jsonify해주어야 함. 따라서, 다른 app.use() middleware보다 상단에 있어야함
app.use(express.urlencoded({ extended: false })); // urlencoded: 브라우저 접속시 form data를 받아올 수 있음
app.use(cookieParser());
app.use(express.static("assets")); // frontend file 열기
app.use("/api", [goodsRouter, UserRouter, AuthRouter]);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

module.exports = http;