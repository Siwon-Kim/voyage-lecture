let primeNumArr = [false, false];

function findPrimeNum(num) {
	for (let i = 2; i <= num; i++) {
		primeNumArr.push(null);
	}
	for (let i = 2; i <= num; i++) {
		if (primeNumArr[i] === null) {
			primeNumArr[i] = true;
			for (let j = i * i; j <= num; j += i) {
				// 소수의 배수를 모두 false 처리
				primeNumArr[j] = false;
			}
		}
	}
}

function solution(n) {
	let primeCnt = 0;
    findPrimeNum(n); // 소수 여부 table 만들기 
	for (let i = 2; i <= n; i++) {
		if (primeNumArr[i]) primeCnt++;
	}
    console.log(primeCnt);
}

solution(10)

// function solution(n) {
// 	let count = 1; // 2 포함
// 	for (let i = 3; i <= n; i++) {
// 		let isPrime = true;
// 		for (let j = 2; j <= Math.sqrt(i); j++) {
// 			if (i % j === 0) {
// 				isPrime = false;
// 				break;
// 			}
// 		}
// 		if (isPrime) {
//             count++;
//             console.log(i);
//         }
// 	}
//     console.log(count);
// }
// solution(10);
