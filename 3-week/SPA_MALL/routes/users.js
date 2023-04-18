const express = require("express");
const router = express.Router();
const User = require("../schemas/user");
const authMiddleware = require("../middlewares/auth-middleware");

// 내 정보 조회 API
router.get("/users/me", authMiddleware, async (req, res) => {
	// auth-middleware에서 넘겨준 res.locals.user = user에 따라
	// db에 저장되어 있던 user의 정보를 res로 받을 수 있다 (res.locals.user)
	const { email, nickname } = res.locals.user;

	res.status(200).json({
		user: {
			email,
			nickname,
		},
	});
});

// 회원가입 API
router.post("/users", async (req, res) => {
	const { email, nickname, password, confirmPassword } = req.body;

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
