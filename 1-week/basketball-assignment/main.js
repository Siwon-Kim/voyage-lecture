// get modules
const readline = require("readline");

// create readline interface
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// global variable
const answer = generateRandomNumber()
let cast = 0;

rl.on("line", (line) => {
    let sCount = 0
    let bCount = 0
    input = [...line]
    // 잘못된 입력이 들어온 경우 예외처리
    if (input.length != 3 || isNaN(line)) {
        console.log('3자리 숫자를 입력해주세요')
        return
    }

    // 판단하는 부분
    for (i in input) {
        for (j in answer) {
            if (input[i] == answer[j]) {
                i==j ? sCount++ : bCount++
            }
        }
    }

    // N번째 입력 체크
    cast++
    console.log(`${cast}번째 시도 : ${line}`)

    // 출력 조절
    if (sCount == 0 && bCount == 0) {
        console.log(`${bCount}B${sCount}S`)
    } else if (sCount == 0) {
        console.log(`${bCount}B`)
    } else if (bCount == 0) {
        console.log(`${sCount}S`)
    } else {
        console.log(`${bCount}B${sCount}S`)
    }

    // 정답인 경우
    if (sCount == 3) {
        console.log(`${cast-1}번 만에 맞히셨습니다.`)
        console.log(`게임을 종료합니다.`)
        rl.close(); // 필수!! close가 없으면 입력을 무한히 받는다.
    }
});

rl.on('close', () => {
    process.exit();
})

// 숫자 야구에 필요한 랜덤 3자리 숫자 생성
function generateRandomNumber() {
    let numbers = [0,1,2,3,4,5,6,7,8,9]
    let answer = [3]
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * (10-i))
        answer[i] = numbers[randomIndex]
        numbers.splice(randomIndex, 1)
    }
    console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!')
    return answer
}