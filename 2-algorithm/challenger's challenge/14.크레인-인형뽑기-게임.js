function solution(board, moves) {
	let answer = 0;
	let size = board.length;
	let stack = [];
	moves.forEach((v) => {
		for (let i = 0; i < size; i++) {
			if (board[i][v - 1] !== 0) {
				if (stack[stack.length - 1] === board[i][v - 1]) {
					answer += 2;
					stack.pop();
				} else {
					stack.push(board[i][v - 1]);
				}
				board[i][v - 1] = 0;
				break;
			}
		}
	});
	console.log(answer);

	return answer;
}

solution(
	[
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 3],
		[0, 2, 5, 0, 1],
		[4, 2, 4, 4, 2],
		[3, 5, 1, 3, 1],
	],
	[1, 5, 3, 5, 1, 2, 1, 4]
);
// 4
