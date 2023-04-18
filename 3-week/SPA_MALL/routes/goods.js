const express = require("express");
const router = express.Router();
const Goods = require("../schemas/goods.js");
const Cart = require("../schemas/cart.js");
const authMiddleware = require("../middlewares/auth-middleware");

// 상품 목록 조회 API
// query string: ?category=drink
router.get("/goods", async (req, res) => {
	const { category } = req.query;

	// 전체 category를 조회하면 {}으로 find하는 부분 처리
	const goods = await Goods.find(category ? { category } : {})
		.sort("-date")
		.exec();
	const results = goods.map((item) => {
		return {
			goodsId: item.goodsId,
			name: item.name,
			price: item.price,
			thumbnailUrl: item.thumbnailUrl,
			category: item.category,
		};
	});

	res.json({ goods: results });
});

// 카트 목록 조회 API
router.get("/goods/cart", authMiddleware, async (req, res) => {
	const { userId } = res.locals.user;
	
	const carts = await Cart.find({ userId }).exec();
	const goodsIds = carts.map((cart) => cart.goodsId);

	const goods = await Goods.find({ goodsId: goodsIds });

	res.json({
		carts: carts.map((cart) => ({
			quantity: cart.quantity,
			goods: goods.find((item) => item.goodsId === cart.goodsId),
		})),
	});
});

// 상품 상세 조회 API
router.get("/goods/:goodsId", async (req, res) => {
	const { goodsId } = req.params;

	// 전체 category를 조회하면 {}으로 find하는 부분 처리
	const goods = await Goods.findOne({ goodsId }).exec();

	const result = {
		goodsId: goods.goodsId,
		name: goods.name,
		price: goods.price,
		thumbnailUrl: goods.thumbnailUrl,
		category: goods.category,
	};

	res.status(200).json({ goods: result });
});

// 상품 추가 API
router.post("/goods", async (req, res) => {
	const { goodsId, name, thumbnailUrl, category, price } = req.body; // object destructuring

	const goods = await Goods.find({ goodsId }).exec(); // MongoDB에 접근해서 해당 id가 있는지 확인하기

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

// 카트에 상품 추가 API
router.post("/goods/:goodsId/cart", authMiddleware, async (req, res) => {
	const { quantity } = req.body;
	const { goodsId } = req.params;
	const { userId } = res.locals.user;

	const existingCart = await Cart.find({ goodsId, userId }).exec();

	if (existingCart.length) {
		return res.status(400).json({
			success: false,
			errorMessage: "이미 존재하는 goodsId입니다.",
		});
	}

	await Cart.create({
		userId,
		goodsId,
		quantity,
	});
	res.json({ result: "success" });
});

// 카트 상품 수량 수정 API
router.put("/goods/:goodsId/cart", authMiddleware, async (req, res) => {
	const { goodsId } = req.params;
	const { quantity } = req.body;
	const { userId } = res.locals.user;

	if (quantity < 1) {
		return res
			.status(400)
			.json({ errorMessage: "수량은 1 이상이어야 합니다." });
	}

	const existingCart = await Cart.find({ goodsId, userId }).exec();

	if (existingCart.length) {
		await Cart.updateOne(
			{ userId, goodsId },
			{ $set: { quantity } }
		);
	}
	res.status(200).json({ result: true });
});

// 카트 상품 삭제 API
router.delete("/goods/:goodsId/cart", authMiddleware, async (req, res) => {
	const { goodsId } = req.params;
	const { userId } = res.locals.user;

	const existingCart = await Cart.find({ goodsId, userId }).exec();

	if (existingCart.length) {
		await Cart.deleteOne({ userId, goodsId });
	}
	res.status(200).json({ result: true });
});

module.exports = router;
