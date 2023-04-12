function solution(num) {
	var answer = "";
	if (num % 2 === 0) {
		answer = "Even";
	} else {
		answer = "Odd";
	}
	return answer;
}

function solution1(num) {
	return (num % 2 === 0) ? "Even" : "Odd";
}
