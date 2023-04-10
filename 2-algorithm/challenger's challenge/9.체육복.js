function solution(n, lost, reserve) {
	let setLost = new Set(lost);
	let setReserve = new Set(reserve);

	lost = [...setLost].filter((data) => !setReserve.has(data)).sort((a, b) => a - b);
	reserve = [...setReserve].filter((data) => !setLost.has(data)).sort((a, b) => a - b);

    let foundCnt = 0
    lost.forEach((s1) => {
        let reserve_len = reserve.length
        for(let j = 0; j < reserve_len; j++) {
            let s2 = reserve[j]
            if(Math.abs(s1 - s2) === 1) {
                reserve.splice(j, 1)
                foundCnt++
            } 
        }
    })
    
	return n - (lost.length - foundCnt );
}

solution(5, [2, 4], [1, 3, 5]);
