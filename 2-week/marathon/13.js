function solution(a, b) {
	const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const day = new Date(`2016-${a}-${b}`).getDay();
	return week[day];
}

// getDay() method
// const birthday = new Date('August 19, 1975 23:15:30');
// const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6