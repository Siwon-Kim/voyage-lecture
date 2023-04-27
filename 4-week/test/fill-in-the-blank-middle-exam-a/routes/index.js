const express = require('express');
const Likes = require('./likes');
const Posts = require('./posts');
const Comments = require('./comments');
const Login = require('./login');
const SignUp = require('./signup');

const router = express.Router();

// 1번 문제: Router 연동
router.use('/login', [Login]);

router.use('/signup', [SignUp]);

router.use('/posts', [Likes, Posts]);

router.use('/posts/:_postId/comments', [Comments]);

module.exports = router;
