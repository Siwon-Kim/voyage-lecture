function printMap(N, map) {
	let x = [1, -1, 0, 0, 1, 1, -1, -1];
	let y = [0, 0, 1, -1, 1, -1, 1, -1];
	// 새로운 맵을 0으로 초기화해준다
	let newMap = Array.from(Array(N), () => new Array(N).fill(0));

	// 이중 for loop을 돌면서 map의 요소들을 확인한다
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			// 지뢰가 있는 칸에 도달한 경우
			if (map[i][j] !== ".") {
				// 새 map에 지뢰 칸이라는 것을 표기해준다
				newMap[i][j] = "*";

				// 해당 칸이 지뢰인 경우 주변 칸들에 해당 숫자만큼을 더해준다
				let numOfMine = Number(map[i][j]);
				for (let k = 0; k < 8; k++) {
					// map 안에 들어 있는 인덱스인지 확인하고 지뢰가 없는 칸인지도 확인한다
					if (
						i + x[k] >= 0 &&
						i + x[k] < N &&
						j + y[k] >= 0 &&
						j + y[k] < N &&
						map[i + x[k]][j + y[k]] === "."
					) {
						newMap[i + x[k]][j + y[k]] += numOfMine;
					}
				}
			}
		}
	}

	// newMap을 순회하면서 10이 넘는 경우를 M으로 변환해준다
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (newMap[i][j] >= 10) newMap[i][j] = "M";
		}
	}

	return newMap;
}

let N = 5;
let arr = [
	["1", ".", ".", ".", "."],
	[".", ".", "3", ".", "."],
	[".", ".", ".", ".", "."],
	[".", "4", ".", ".", "."],
	[".", ".", ".", "9", "."],
];
// let arr1 = [
// 	["2", ".", ".", "."],
// 	[".", ".", "9", "."],
// 	[".", "3", ".", "2"],
// 	[".", "4", ".", "."],
// ];
console.log(printMap(N, arr));
