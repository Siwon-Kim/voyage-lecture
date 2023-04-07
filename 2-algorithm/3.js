function solution(s) {
	var answer = "";
	var index = 0;
	// 짝수인 경우
	if (s.length % 2 == 0) {
		index = s.length / 2 - 1;
		answer = s.substring(index, index + 2);
		console.log(answer);
    // 홀수인 경우
	} else {
		index = Math.floor(s.length / 2);
		answer = s[index];
	}
	return answer;
}
