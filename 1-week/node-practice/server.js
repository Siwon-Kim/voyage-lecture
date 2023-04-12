const express = require("express");
const app = express();
const port = 8080


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})

app.listen(port, () => {
	console.log("Listening at 8080");
});