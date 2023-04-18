const jwt = require("jsonwebtoken");
const SECRET_KEY = "secretkeyforspamall";
const User = require("../schemas/user");

module.exports = async (req, res, next) => {
	const { Authorization } = req.cookies;

	// 1. authorization cookie가 존재하지 않을 때 대비
	// Nullish Coalescing: authorization이 undefined이면 빈 문자열로 처리
	// 앞에 있는 Bearer type과 jwt token을 분리
	const [ authType, authToken ] = (Authorization ?? "").split(" ");

	// 2. authType validation
	if (authType !== "Bearer" || !authToken) {
		res.status(400).json({
			errorMessage: "로그인 후에 이용할 수 있는 기능입니다.",
		});
		return;
	}

	// 3. authToken validation -> 실패시 server error -> try-catch문으로 에러핸들링
	// 3-1. authToken 만료되었는지
	// 3-2. authToken이 서버가 발급한 토큰이 맞는지 검증
	// 3-3. authToken에 있는 userId에 해당하는 사용자가 실제 DB에 존재하는 지 확인
	try {
		const { userId } = jwt.verify(authToken, SECRET_KEY); // 3-1, 3-2 모두 검증
		const user = await User.findById(userId);
		res.locals.user = user; // local에 user 정보를 넘겨준다 (응답 값을 보내고나면 데이터가 바로 소멸된다)

		next(); // 미들웨어를 다음으로 보내준다
	} catch (error) {
		console.error(error);
		res.status(400).json({
			errorMessage: "로그인 후에 이용할 수 있는 기능입니다.",
		});
		return;
	}
};
