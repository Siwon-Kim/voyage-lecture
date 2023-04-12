function solution(n) {
	let str = n.toString();
	let arr = [...str];
	str = "";
	arr.sort((a, b) => {
		return b - a;
	});
	arr.forEach((e, i) => {
		str += e;
	});
	return Number(str);
}
