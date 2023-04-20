// GET: 회원 전체 목록 조회 API
router.get("/user", async (req, res) => {
	const allUsers = await Users.find({})
		.exec()
		.catch((err) => {
            console.error(err)
			return res.status(400).json({ message: "회원 목록 조회 실패" });
		});

	let result = allUsers.map((user) => ({
		userId: user._id,
		name: user.name,
		ID: user.ID,
		pw: user.pw,
	}));

	res.status(200).json({ result });
});


// GET: 회원 상세 조회 API
router.get("/user/:userId", async (req, res) => {
	const { userId } = req.params;

	const targetUser = await Users.findById(userId)
		.exec()
		.catch((err) => {
            console.error(err)
			return res.status(400).json({ message: "회원 상세 조회 실패" });
		});

	let result = {
		userId: targetUser._id,
		name: targetUser.name,
		ID: targetUser.ID,
		pw: targetUser.pw,
	};

	res.status(200).json({ result });
});
