function getTotalScore(result) {
	let [totalScore, trackSeries] = [0, 0];
	for (let i = 0; i < result.length; i++) {
		if (result[i] === "O") {
			trackSeries++;
			totalScore += trackSeries;
		} else if (result[i] === "X") {
			trackSeries = 0;
		}
	}

	return totalScore;
}

console.log(getTotalScore("OXOOOXXXOXOOXOOOOOXO"));
