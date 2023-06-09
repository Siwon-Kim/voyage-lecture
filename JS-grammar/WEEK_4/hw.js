class HttpError extends Error {
	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = "HttpError";
		this.response = response;
	}
}

let loadJson = async (url) => {
	let response = await fetch(url);
	if (response.status == 200) {
		return response.json();
	} else {
		throw new HttpError(response);
	}
}

let narutoIsNotOtaku = async () => {
	let title, res;

	// wait until the user enters something in the prompt
	while (1) {
		title = prompt("애니메이션 제목을 입력하세요.", "naruto");
		try {
			res = await loadJson(
				`https://animechan.vercel.app/api/random/anime?title=${title}`
			);
			break;
		} catch (err) {
			if (err instanceof HttpError && err.response.status == 404) {
				alert(
					"일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!"
				);
				return narutoIsNotOtaku();
			} else {
				throw err;
			}
		}
	}
	alert(`${res.character}: ${res.quote}.`);
	return res;
}

narutoIsNotOtaku();
