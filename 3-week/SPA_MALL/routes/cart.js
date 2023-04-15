const express = require("express");
const router = express.Router();

const Cart = require("../schemas/cart.js");
const Goods = require("../schemas/goods.js");

// 카트 목록 조회 API
router.get("/cart", async (req, res) => {
	const cart = await Cart.find({});
	const goodsIdsInCart = cart.map((goodsInCart) => goodsInCart.goodsId);

	const goods = await Goods.find({ goodsId: goodsIdsInCart });

	const result = cart.map((goodsInCart) => {
		return {
			quantity: cart.quantity,
			goods: goods.find((goods) => goods.goodsId === goodsInCart.goodsId),
		};
	});

	res.json({ cart: result });
});

// 카트에 상품 추가 API
router.post("/goods/:goodsId/cart", async (req, res) => {
	const { quantity } = req.body;
	let { goodsId } = req.params;

	const existingCart = await Cart.find({ goodsId: Number(goodsId) });

	if (existingCart.length) {
		return res.status(400).json({
			success: false,
			errorMessage: "이미 존재하는 goodsId입니다.",
		});
	}

	const createGoodsForCart = await Cart.create({
		goodsId,
		quantity,
	});
	res.json({ goods: createGoodsForCart });
});

module.exports = router;
