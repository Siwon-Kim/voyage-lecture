const express = require("express");
const router = express.Router();
const User = require("../schemas/user");

// 회원가입 API
router.post("/users", async (req, res) => {
	const { email, nickname, password, confirmPassword } = req.body;
	console.log(email);
	// 1. password validation
	if (password !== confirmPassword) {
		res.status(400).json({
			errorMessage: "패스워드와 패스워드 확인값이 일치하지 않습니다.",
		});
		return;
	}

	// 2. email, nickname validation
	const existingUser = await User.findOne({
		$or: [{ email }, { nickname }],
	});
	if (existingUser) {
		res.status(400).json({
			errorMessage: "이메일/닉네임이 이미 존재합니다.",
		});
		return;
	}

	// 3. save user to DB
	const user = new User({ email, nickname, password });
	await user.save();

	return res.status(201).json({});
});

module.exports = router;
