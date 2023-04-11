let middleDistArr = [
	[3, 2, 1, 0],
	[1, 2, 3, 4],
	[0, 1, 2, 3],
	[1, 2, 3, 4],
	[2, 1, 2, 3],
	[1, 0, 1, 2],
	[2, 1, 2, 3],
	[3, 2, 1, 2],
	[2, 1, 0, 1],
	[3, 2, 1, 2],
    [4, 3, 2, 1],
    [4, 3, 2, 1],
];
let middle = [2, 5, 8, 0];

function solution(numbers, hand) {
	let leftPos = 10; // * = 10
	let rightPos = 11; // # = 11
	let answer = "";
    
	numbers.forEach((num, i) => {
		if (num === 1 || num === 4 || num === 7 || num === 10) {
			answer += "L";
			leftPos = num;
		} else if (num === 3 || num === 6 || num === 9 || num === 11) {
			answer += "R";
			rightPos = num;
		} else {
			let numIdx = middle.indexOf(num);
			let	leftDist = middleDistArr[leftPos][numIdx];
			let	rightDist = middleDistArr[rightPos][numIdx];
            console.log(i, ": ", num, leftPos, rightPos, leftDist, rightDist);
			if (
				leftDist > rightDist ||
				(leftDist === rightDist && hand === "right")
			) {
				answer += "R";
				rightPos = num;
			} else if (
				leftDist < rightDist ||
				(leftDist === rightDist && hand === "left")
			) {
				answer += "L";
				leftPos = num;
			}
		}
	});

	console.log(answer);
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
// LRLLRRLLLRR
