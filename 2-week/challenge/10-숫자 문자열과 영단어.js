function solution(s) {
	const numStr = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
	];
	for (let i = 0; i < 10; i++) {
		s = s.replaceAll(numStr[i], String(i));
	}
    console.log(s);
	return Number(s);
}

solution("zeroone4seveneight");
