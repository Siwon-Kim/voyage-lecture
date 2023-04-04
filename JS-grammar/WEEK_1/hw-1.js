// - 문자열 연습하기:
//   대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
//   다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
//   단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
//   예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
const prompt = require("prompt-sync")();
const str = prompt("Enter the string: ");

function solution(str) {
	let pCount = 0,
		yCount = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "p" || str[i] === "P") {
			pCount++;
		} else if (str[i] === "y" || str[i] === "Y") {
			yCount++;
		}
	}
	if (pCount === yCount) {
		return true;
	} else {
		return false;
	}
}

console.log(solution(str));

// Better solution:
function betterSolution(s) {
	var result = true;
	s = s.toUpperCase();
	var num = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] === "P") num++; // p이면 갯수 더하기
		if (s[i] === "Y") num--; // y이면 갯수 빼기
	}
	result = num === 0; // p, y 갯수가 같으면 0 (p가 많으면 양수, 반대 음수)

	return result;
}
