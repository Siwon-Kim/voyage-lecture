function solution(array, commands) {
	let answer = [];
	commands.forEach((arr) => {
		let i = arr[0],
			j = arr[1],
			k = arr[2];
		let newArr = [];
		// i~j번째까지 자르기
		newArr = array.slice(i - 1, j);
		// 정렬하기
		newArr.sort((v1, v2) => v1 - v2);
		// k번째 수 찾기
		answer.push(newArr[k - 1]);
	});
}

solution(
	[1, 5, 2, 6, 3, 7, 4],
	[
		[2, 5, 3],
		[4, 4, 1],
		[1, 7, 3],
	]
);
