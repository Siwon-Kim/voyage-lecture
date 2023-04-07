function solution(arr) {
	let minIdx,
		minVal = 10000;
	arr.forEach((e, i) => {
		if (minVal > e) {
			minVal = e;
			minIdx = i;
		}
	});
	arr.splice(minIdx, 1);
	if (arr.length === 0) {
		arr.push(-1);
	}
	return arr;
}
