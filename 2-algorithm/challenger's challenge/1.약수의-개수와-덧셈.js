function solution(left, right) {
    let sum = 0
	for (let i = left; i <= right; i++) {
		let count = 0;
		let rootVal = Math.sqrt(i);
		for (let j = 1; j <= rootVal; j++) {
			if (i % j === 0) {
				if (j == rootVal) count++;
				else count += 2;
			}
		}
        if(count % 2 === 0) sum += i
        else sum -= i
	}
    console.log(sum);
}

solution(24, 27)
