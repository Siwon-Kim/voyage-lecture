function solution(n) {
	var answer = "";
	const subak = "수박";
	if (n % 2 == 0) {
		answer = subak.repeat(n / 2);
	} else {
		answer = subak.repeat(Math.floor(n / 2)) + subak[0];
	}
	return answer;
}
