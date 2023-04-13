function getTotalScore(result) {
	let [totalScore, trackSequence] = [0, 0];
	for (let val of result) {
		if (val === "O") {
            // 연속성을 저장하는 변수의 값을 늘려준다
			trackSequence++;

            // 점수를 연속성에 저장된 값만큼 늘려준다
			totalScore += trackSequence;
            
		} else if (val === "X") {
            // 연속성을 초기화한다
			trackSequence = 0;
		}
	}

	return totalScore;
}

console.log(getTotalScore("OXOOOXXXOXOOXOOOOOXO")); // 27
