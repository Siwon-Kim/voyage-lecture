const express = require("express");
const app = express();
const PORT = 3000;
const postRouter = require("./routes/posts.router.js");

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use("/", [postRouter]);

app.listen(PORT, () => {
	console.log(`Server listen ${PORT}`);
});
