function solution(dartResult) {
    let dartResultArr = dartResult.split("")
    let answer = 0
    let scoresArr = []
    for(let i = 0; i < 3; i++) {
        let score = dartResultArr.shift()
        let bonus = dartResultArr.shift()
        if(bonus == 0) {
            score = 10;
            bonus = dartResultArr.shift()
        }
        let option = dartResultArr.shift()
        if(!isNaN(option)) { // 옵션이 없는 경우
            dartResultArr.unshift(option)
            option = undefined
        }
        console.log(score, bonus, option);
        if(bonus == 'S') score = score ** 1
        if(bonus == 'D') score = score ** 2
        if(bonus == 'T') score = score ** 3
        scoresArr.push(score)
        
        if(option == '*') { 
            scoresArr[i-1] *= 2
            scoresArr[i] *= 2
        }
        if(option == '#') scoresArr[i] = -score

    }
    console.log(scoresArr);
    answer = scoresArr.reduce((acc, curr) => acc + curr);
    return answer
}

solution("1T2D3D#");


