const jwt = require("jsonwebtoken");
const { Users } = require("../models");
const SECRET_KEY = "secretkey";

module.exports = async (req, res, next) => {
	const { Authorization } = req.cookies;
	const [tokenType, token] = (Authorization ?? "").split(" ");

	if (tokenType !== "Bearer" || !token) {
		return res
			.status(401)
			.json({
				errorMessage:
					"토큰 타입이 일치하지 않거나, 토큰이 존재하지 않습니다.",
			});
	}

	try {
		const decodedToken = jwt.verify(token, SECRET_KEY);
		const userId = decodedToken.userId;
		const user = await Users.findOne({ where: { userId } });
		if (!user) {
			return res
				.status(401)
				.json({
					errorMessage: "토큰에 해당하는 사용자가 존재하지 않습니다.",
				});
		}
		res.locals.user = user;
		next();
	} catch (error) {
		console.error(error.message);
		return res.status(401).json({ errorMessage: "비정상적인 접근입니다." });
	}
};
