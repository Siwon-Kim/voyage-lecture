// 에라토스테네스의 채 vs 루트N까지 반복문 돌리기
// 소수 count
// 소수 true, 소수가 아니면 false, 초기값은 null
let primeArr = [false, false];
const len = 2996;

// 채 arr 2 false
function findPrimeNum() {
	// 배열 초기화
	for (let i = 2; i <= len; i++) {
		primeArr.push(null);
	}
    console.log(primeArr);
	// 소수인지 판별하는 반복문
	for (let i = 2; i <= len; i++) {
		// 배열의 값이 null 일때 true로 바꿔주고
		if (primeArr[i] == null) {
			primeArr[i] = true;
            // primeArr.splice(i, 1, true)
			// 소수인거 발견 하면 i = n*n 부터 끝까지 i += n
			for (let j = i * i; j <= len; j += i) {
				primeArr[j] = false;
                // primeArr.splice(j, 1, false)
			}
		}
	}
}

function solution(nums) {
	let primeCnt = 0;
    findPrimeNum()

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				let sum = nums[i] + nums[j] + nums[k];
				// 소수 판별하기
				if (primeArr[sum]) {
					primeCnt++;
				}
			}
		}
	}
    console.log(primeArr);
	return primeCnt;
}

solution([1,2,3,4]) // 1