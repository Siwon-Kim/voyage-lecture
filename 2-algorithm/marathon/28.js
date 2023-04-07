function solution(x) {
	let strNum = x.toString();
	let arr = [...strNum];
	let sum = 0;
	arr.forEach((e) => {
		sum += Number(e);
	});
	if (x % sum === 0) {
		return true;
	} else {
		return false;
	}
}
