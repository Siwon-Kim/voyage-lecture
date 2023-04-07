function solution(n) {
	let sum = 0;
	n = n.toString();
	let arr = [...n];
	arr.forEach((e) => {
		sum += Number(e);
	});
	console.log(sum);
	return sum;
}
