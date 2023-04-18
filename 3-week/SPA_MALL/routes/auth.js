const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../schemas/user");
const SECRET_KEY = "secretkeyforspamall";

// 로그인 API
router.post("/auth", async (req, res) => {
	const { email, password } = req.body;
	const existingUser = await User.findOne({ email });

	// 1. email does not exist validation
    // 2. password does not match validation
	if (!existingUser || password !== existingUser.password) {
		res.status(400).json({ errorMessage: "로그인에 실패하였습니다." });
		return;
	}

	// 3. create JWT and send to cookie & body
	const token = jwt.sign({ userId: existingUser.userId }, SECRET_KEY);
	res.cookie("Authorization", "Bearer" + token);
	return res.status(200).json({ token });
});

module.exports = router;