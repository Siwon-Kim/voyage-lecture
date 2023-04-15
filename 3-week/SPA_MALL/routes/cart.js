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
			quantity: goodsInCart.quantity,
			goods: goods.find((goods) => goods.goodsId === goodsInCart.goodsId),
		};
	});

	res.json({ cart: result });
});

module.exports = router;
