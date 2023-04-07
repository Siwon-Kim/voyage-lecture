function solution(a, b) {
	const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const day = new Date(`2016-${a}-${b}`).getDay();
	return week[day];
}

// getDay() method
