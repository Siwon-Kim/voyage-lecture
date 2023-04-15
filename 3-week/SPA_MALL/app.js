const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods.js");
const cartRouter = require("./routes/cart.js");
const connect = require("./schemas"); // no need to add file names, it will be automatically imported
connect();

app.use(express.json()); // body로 전달받은 JSON 데이터는 바로 사용할 수 없어서 이를 jsonify해주어야 함. 따라서, 다른 app.use() middleware보다 상단에 있어야함

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/api", [goodsRouter, cartRouter]);
// goodsRouter is the array and [goodsRouter] will create an array with one each element
// when you want to create a new array with a single element that is the value of a variable

app.listen(port, () => {
	console.log(port, "포트로 서버가 열렸어요!");
});
