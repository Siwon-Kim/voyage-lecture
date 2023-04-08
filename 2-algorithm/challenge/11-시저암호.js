function solution(s, n) {
	let prime = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	let arrLen = 26;
	let minor = prime.map((e) => e.toLowerCase());
	let arr = [...s];

	let newStr = "";
	arr.forEach((e, i) => {
		if (e == " ") {
			newStr += " ";
		} else if (e.match(new RegExp(/^[A-Z]/))) {
			// 조건문 26 넘어가는지 판별
			let idx = prime.indexOf(e);
			if (idx + n >= arrLen) {
				newStr += prime[idx + n - arrLen];
			} else {
				newStr += prime[idx + n];
			}
		} else {
			let idx = minor.indexOf(e);
			if (idx + n >= arrLen) {
				newStr += minor[idx + n - arrLen];
			} else {
				newStr += minor[idx + n];
			}
		}
	});
	console.log(newStr);
	return newStr;
}

solution("z", 1);
