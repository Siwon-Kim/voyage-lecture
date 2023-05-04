const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

const createNewPost = async (req, res) => {
	const { title, content } = req.body;

	if (!title || !content || typeof title !== "string" || typeof content !== "string") {
		return res.status(412).json({ errorMessage: "데이터 형식이 올바르지 않습니다." });
	}

	try {
		const newPost = await Posts.create({ title, content });
		const post = {
			id: newPost.dataValues.id,
			title: newPost.dataValues.title,
			content: newPost.dataValues.content,
		}
		res.status(201).json(post);
	} catch (err) {
		console.error(err);
		res.status(500).json({ errorMessage: "게시글 작성에 실패하였습니다." });
	}
};

const getAllPosts = async (req, res) => {
	try {
		const allPosts = await Posts.findAll();
		const posts = allPosts.map(post => ({
			id: post.id,
			title: post.title,
			content: post.content,
		}))
		res.status(200).json(posts);
	} catch (err) {
		console.error(err);
		res.status(500).json({ errorMessage: "게시글 조회에 실패하였습니다." });
	}
};

const updatePost = async (req, res) => {
	const { title, content } = req.body;
	const { postId } = req.params;

	if (!title || !content || typeof title !== "string" || typeof content !== "string") {
		return res.status(412).json({ errorMessage: "데이터 형식이 올바르지 않습니다." });
	}

	try {
		const existPost = await Posts.findByPk(postId);
		if (!existPost) {
			return res.status(404).json({ errorMessage: "게시글이 존재하지 않습니다." });
		}

		await Posts.update({ title, content }, { where: { id: postId } });
		const updatedPost = await Posts.findByPk(postId);
		const post = {
			id: updatedPost.dataValues.id,
			title: updatedPost.dataValues.title,
			content: updatedPost.dataValues.content,
		}
		res.status(200).json(post);
	} catch (err) {
		console.error(err);
		res.status(500).json({ errorMessage: "게시글 수정에 실패하였습니다." });
	}
};

const deletePostById = async (req, res) => {
	const { postId } = req.params;

	try {
		const existPost = await Posts.findByPk(postId);
		if (!existPost) {
			return res.status(404).json({ errorMessage: "게시글이 존재하지 않습니다." });
		}

		await Posts.destroy({ where: { id: postId } });
		res.status(200).json({ message: "success" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ errorMessage: "게시글 삭제에 실패하였습니다." });
	}
};

router.post("/api/posts", createNewPost);
router.get("/api/posts", getAllPosts);
router.put("/api/posts/:postId", updatePost);
router.delete("/api/posts/:postId", deletePostById);

module.exports = router;
