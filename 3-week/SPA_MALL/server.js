const port = 3000;
const http = require("./app.js")
require("./socket.js")

http.listen(port, () => {
	console.log(port, "포트로 서버가 열렸어요!");
});