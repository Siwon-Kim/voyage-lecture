const prompt = require("prompt-sync")(); // npm install prompt-sync

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 1;

// 서로 다른 숫자 3개 뽑기
let answer = "";
while (answer.length < 3) {
	const random = arr[Math.floor(Math.random() * arr.length)];
	if (!answer.includes(random)) {
		// answer.concat(random.toString());
		answer += random.toString();
	}
}

while (true) {
	// 1. 인풋 받기
	let trial = prompt(`${n}번째 시도: `);
	if (trial.length != 3 || isNaN(trial)) {
		console.log("3자리 숫자를 입력하세요.\n");
		continue;
	}
	let s = 0;
	let b = 0;

	// 2. 판결하기
	// 1) 숫자의 값과 위치가 모두 일치하면 S
	// 2) 숫자의 값은 일치하지만 위치가 틀렸으면 B
	for (let i = 0; i < answer.length; i++) {
		if (answer[i] === trial[i]) {
			s++;
		} else if (answer.includes(trial[i])) {
			b++;
		}
	}

	// 3. 아웃풋 처리하기
	// 1) S가 0인데 B에 값이 있을 경우
	// 2) B가 0인데 S에 값이 있을 경우
	// 3) S와 B가 둘 다 0일 경우
	// 4) S와 B에 둘 다 값이 있을 경우

	if (s === 0 && b !== 0) {
		console.log(`${b}B`);
	} else if (b === 0 && s !== 0) {
		console.log(`${s}S`);
	} else {
		console.log(`${b}B${s}S`);
	}

	// 4. 정답인 경우 처리
	if (answer === trial) {
		console.log(`${n - 1}번만에 맞히셨습니다.\n게임을 종료합니다.`);
		break;
	}

	// 5. n번째 처리
	n++;
}
