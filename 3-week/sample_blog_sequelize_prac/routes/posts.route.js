const express = require("express");
const { Users, UserInfos, Posts } = require("../models");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

// 게시물 작성 API
router.post("/posts", authMiddleware, async (req, res) => {
	const { userId } = res.locals.user;

	const { title, content } = req.body;
	const post = await Posts.create({
		UserId: userId,
		title,
		content,
	});
	return res.status(201).json({ post });
});

// 게시물 조회 API
router.get("/posts", async (req, res) => {
	const posts = await Posts.findAll({
		attributes: ["postId", "title", "createdAt", "updatedAt"],
		order: [["createdAt", "DESC"]],
	});
	return res.status(200).json({ data: posts });
});

// 게시물 상세 조회 API
router.get("/posts/:postId", async (req, res) => {
	const { postId } = req.params;

	const post = await Posts.findOne({
		where: { postId },
		attributes: ["postId", "title", "createdAt", "updatedAt"],
	});

	return res.status(200).json({ data: post });
});

module.exports = router;
