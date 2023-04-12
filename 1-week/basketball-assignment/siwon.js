const prompt = require("prompt-sync")();
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");
let trial, n = 1;
let multiples = []

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = arr[Math.floor(Math.random() * arr.length)].toString();
console.log(typeof answer, answer);
while(answer.length != 3) {
    let random = arr[Math.floor(Math.random() * arr.length)].toString();
    if(!answer.includes(random)) {
        let neww = answer.concat(random)
        console.log(neww);
    }
}
console.log(answer);

while (1) {
    let cnt_s = 0, cnt_b = 0;
	trial = prompt(`${n}번째 시도: `);
	if (trial.length != 3) {
		console.log("3자리 숫자를 입력하세요.\n");
		continue;
	}

	for (let i = 0; i < 3; i++) {
        if (answer[i] == trial[i]) {
            cnt_s++;
        } else if (answer.includes(trial[i])) {
            cnt_b++;
            multiples.push(trial[i])
        }
    }
    
    if (cnt_b === 0 && cnt_s !== 0) {
        console.log(`${cnt_s}S`);
    } else if (cnt_s === 0 && cnt_b !== 0) {
        console.log(`${cnt_b}B`);
    } else {
        console.log(`${cnt_b}B${cnt_s}S`);
    }

    if (trial === answer) {
        console.log(`${n-1}번만에 맞히셨습니다\n게임을 종료합니다.`);
        break;
    }

	n++;
}
