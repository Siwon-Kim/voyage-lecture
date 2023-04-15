const express = require("express");
const router = express.Router();

const Goods = require("../schemas/goods.js");

// 상품 목록 조회 API
router.get("/goods", async (req, res) => {
	const goods = await Goods.find({});
	res.json({ goods: goods });
});

// 상품 상세 조회 API
router.get("/goods/:goodsId", async (req, res) => {
	let { goodsId } = req.params;
	const goods = await Goods.find({});
	let [detail] = goods.filter((goods) => Number(goodsId) === goods.goodsId);
	res.json({ detail });
});

// 상품 추가 API
router.post("/goods", async (req, res) => {
	const { goodsId, name, thumbnailUrl, category, price } = req.body; // object destructuring

	const goods = await Goods.find({ goodsId }); // MongoDB에 접근해서 해당 id가 있는지 확인하기

	if (goods.length) {
		return res.status(400).json({
			success: false,
			errorMessgae: "이미 존재하는 goodsId입니다.",
		});
	}

	const createdGoods = await Goods.create({
		goodsId,
		name,
		thumbnailUrl,
		category,
		price,
	});
	res.json({ goods: createdGoods });
});

module.exports = router;
