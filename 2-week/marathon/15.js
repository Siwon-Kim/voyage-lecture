function solution(a, b) {
	let result = 0;
	a.forEach((e, i) => {
		result += a[i] * b[i];
	});
	return result;
}
