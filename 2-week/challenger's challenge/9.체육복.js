function solution(n, lost, reserve) {
	let setLost = new Set(lost);
	let setReserve = new Set(reserve);

	lost = [...setLost]
		.filter((data) => !setReserve.has(data))
		.sort((a, b) => a - b);
	reserve = [...setReserve]
		.filter((data) => !setLost.has(data))
		.sort((a, b) => a - b);

	let foundCnt = 0;
	lost.forEach((s1) => {
		let reserve_len = reserve.length;
		for (let j = 0; j < reserve_len; j++) {
			let s2 = reserve[j];
			if (Math.abs(s1 - s2) === 1) {
				reserve.splice(j, 1);
				foundCnt++;
			}
		}
	});

	return n - (lost.length - foundCnt);
}

solution(5, [2, 4], [1, 3, 5]);

function solution(n, lost, reserve) {
	lost.sort((a, b) => a - b);
	reserve.sort((a, b) => a - b);

	lost = lost.filter((student) => {
		if (reserve.includes(student)) {
			reserve.splice(reserve.indexOf(student), 1);
			return false;
		}
		return true;
	});

	// lost 학생의 앞 번호, 뒷 번호 사람이 여벌 체육복을 가지고 있는지 판별
	lost = lost.filter((student) => {
		/**
    1. 앞 번호 사람이 가지고 있으면 lost에서 학생 빼고 reserve에서 체육복 제거
    2. 뒷 번호 사람이 가지고 있는지 판별
    3. return true
    */
		if (reserve.includes(student - 1)) {
			reserve.splice(reserve.indexOf(student - 1), 1);
			return false;
		} else if (reserve.includes(student + 1)) {
			reserve.splice(reserve.indexOf(student + 1), 1);
			return false;
		} else {
			return true;
		}
	});
	return n - lost.length;
}
