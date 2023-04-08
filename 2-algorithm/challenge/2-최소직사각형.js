function solution(sizes) {
    let hMax = 0;
    let wMax = 0;
	sizes.forEach((e) => {
		if (e[0] < e[1]) {
            // [e[0], e[1]]
            e = [e[1], e[0]] // destructuring
		}
        if (e[1] > hMax) { // 가로 최솟값
            hMax = e[1]
        }
        if (e[0] > wMax) { // 세로 최댓값
            wMax = e[0]
        }
        
	});
	return wMax * hMax;
}

// result 4000
solution([
	[60, 50],
	[30, 70],
	[60, 30],
	[80, 40],
]);

// 1. 가로가 세로보다 짧을 때 swap
// swap
//using destructuring assignment
// [a, b] = [b, a]
// 2. 가로, 세로 중에서 max값 각각 뽑기
