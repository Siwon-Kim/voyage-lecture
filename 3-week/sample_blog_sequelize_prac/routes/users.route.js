const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secretkey";
const { Users, UserInfos } = require("../models");
const router = express.Router();

// 회원가입 API
router.post("/users", async (req, res) => {
	const { email, password, name, age, gender, profileImage } = req.body;
	const existUser = await Users.findOne({
		where: { email },
	});
	if (existUser) {
		return res
			.status(409)
			.json({ errorMessage: "이미 존재하는 이메일 입니다" });
	}

	const user = await Users.create({ email, password });
	await UserInfos.create({
		UserId: user.userId,
		name,
		age,
		gender,
		profileImage,
	});

	return res.status(201).json({ message: "회원가입이 완료되었습니다." });
});

// 로그인 API
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	const existUser = await Users.findOne({
		where: { email },
	});

	if (!existUser) {
		return res
			.status(401)
			.json({ errorMessage: "해당하는 사용자가 존재하지 않습니다." });
	} else if (existUser.password !== password) {
		return res
			.status(401)
			.json({ errorMessage: "비밀번호가 일치하지 않습니다." });
	}

	const token = jwt.sign({ userId: existUser.userId }, SECRET_KEY);
	res.cookie("Authorization", `Bearer ${token}`);
	return res.status(200).json({ message: "로그인에 성공하였습니다." });
});

// 사용자 정보 API
router.get("/users/:userId", async (req, res) => {
	const { userId } = req.params;
	const user = await Users.findOne({
		where: { userId },
		attributes: ["userId", "email", "createdAt", "updatedAt"], // 가져올 attributes들
		include: [
			{
				model: UserInfos,
				attributes: ["name", "age", "gender", "profileImage"],
			},
		], // join: 관계를 가지고 있는 db에서도 값 가져오기
	});

	return res.status(200).json({ data: user });
});

module.exports = router;
