// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
// sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const strings = ["sun", "bed", "car"];
const n = 1;

strings.sort((a, b) => {
	if (a[n] > b[n]) {
		return 1;
	} else if (a[n] < b[n]) {
		return -1;
	} else {
		return 0;
	}
});

console.log(strings);

// Answer:
function answer(strings, n) {
	let result = [];

	// 문자열 가장앞 글자 붙인 문자 배열 만들기
	for (let i = 0; i < strings.length; i++) {
		strings[i] = strings[i][n] + strings[i];
	}

	// 문자열 사전순 정렬
	strings.sort();

	// 앞글자 제거 후 리턴
	for (let j = 0; j < strings.length; j++) {
		strings[j] = strings[j].replace(strings[j][0], "");
		result.push(strings[j]);
	}

	return result;
}
