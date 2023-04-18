const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

// Cookie - 사용자의 열쇠를 담당
app.get("/set-cookie", (req, res) => {
	let expires = new Date();
	expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

	res.cookie("name", "sparta", {
		expires: expires,
	});
	return res.status(200).end();
});

app.get("/get-cookie", (req, res) => {
	const cookie = req.cookies; // cookie-parser 미들웨어가 사용된 부분 (미들웨어 없으면 req.header.cookie)
	console.log(cookie); // { name: 'sparta' }
	return res.status(200).json({ cookie });
});

// Session - 모든 정보는 세션(서버)에서 담당
let session = {};
app.get("/set-session", function (req, res, next) {
	const name = "sparta"; // 세션에 저장할 데이터
	const uniqueInt = Date.now(); // 클라이언트에게 할당할 키
	session[uniqueInt] = { name }; // 키: uniqueInt, 값: name

	res.cookie("sessionKey", uniqueInt); // sessionKey라는 이름으로 cookie에 세션키 담기
	return res.status(200).end();
});

app.get("/get-session", function (req, res, next) {
	const { sessionKey } = req.cookies; // 사용자의 쿠키 안에 있는 sessionKey를 가져오기
	const name = session[sessionKey]; // 세션키를 통해 반대로 name을 조회한다
	return res.status(200).json({ name });
});

app.listen(5002, () => {
	console.log(5002, "포트가 실행 중입니다.");
});
