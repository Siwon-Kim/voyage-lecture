function solution(arr, divisor) {
	var answer = [];
	arr.forEach((e, i) => {
		if (e % divisor === 0) {
			answer.push(e);
		}
	});
	if (answer.length === 0) {
		answer.push(-1);
	} else {
		answer.sort((a, b) => {
			return a - b;
		});
	}

	return answer;
}

// loadsh -> _.sortBy(arr)