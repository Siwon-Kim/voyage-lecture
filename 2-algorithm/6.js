function solution(numbers) {
	var answer = 0;
	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.forEach((e) => {
		if (!numbers.includes(e)) {
			console.log(e);
			answer += e;
		}
	});
	console.log(answer);
	return answer;
}

// includes(element, start):
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.