function solution(s) {
    let tmpArr = [...s]
	tmpArr.sort().reverse();
	tmpArr.forEach((e) => {
		if (e.match(new RegExp("/^[A-Z]/"))) {
			tmpArr.shift();
			tmpArr.push(e);
		}
	});
    let result = tmpArr.join("")
	return result;
}
// 대소문자 확인하기!
// 1. toUpperCase()
// 2. 정규식 value.match(new RegExp(/^[A-Z]/)) => true

// 로직
// 0. 문자열을 배열로 바꿔주기
// 1. 내림차순으로 sort()하기 - 대문자가 앞에 가있을 거임
// 2. 반복문에서 대문자이면 shift, push로 배열 뒤로 넣어주기
