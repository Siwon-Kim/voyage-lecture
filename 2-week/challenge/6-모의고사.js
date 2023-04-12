function solution(answers) {
    let count1 = 0
    let count2 = 0
    let count3 = 0

    let pattern1 = "12345" // 5
    let pattern2 = "21232425" // 8
    let pattern3 = "3311224455" // 10
    
    let answer1 = ''
    let answer2 = ''
    let answer3 = ''

    let len = answers.length

    // 1번 수포자
    answer1 = pattern1.repeat(Math.floor((len-1) / 5))
    answer1 += pattern1.substr(0, (len-1) % 5 + 1)
    // 2번 수포자
    answer2 = pattern2.repeat(Math.floor((len-1) / 8))
    answer2 += pattern2.substr(0, (len-1) % 8 + 1)
    // 3번 수포자
    answer3 = pattern3.repeat(Math.floor((len-1) / 10))
    answer3 += pattern3.substr(0, (len-1) % 10 + 1)
    // console.log(answer1, answer2, answer3);

    answers.forEach((e, i) => {
        if (answer1[i] == e) {
            count1++
        }
        if (answer2[i] == e) {
            count2++
        }
        if (answer3[i] == e) {
            count3++
        }
    })

    // var max = Math.max(num1, num2, num3); - 숫자만
    let result = []
    let maxScore = Math.max(count1, count2, count3)
    
    console.log(count1, count2, count2);
    if (count1 === maxScore) { // strict mode (type+value matching) '2' !== 2
        result.push(1)
    }
    if (count2 === maxScore) { // strict mode (type+value matching) '2' !== 2
        result.push(2)
    }
    if (count3 === maxScore) { // strict mode (type+value matching) '2' !== 2
        result.push(3)
    }

    return result;
}

solution([1,2,3,4,5,3,4,5])
// 1번 12345 -> 12345
// 2번 21 23 24 25 ->
// 3번 33 11 22 44 55 ->

// result = [1] 

// 1. 1, 2, 3번 정답 카운트 변수 만들기
// 2. 1, 2, 3번 수포자의 정답 패턴을 찾아서 answer의 길이만큼 만든다
// 3. answers를 돌면서 1,2,3번 정답과 비교하면서 카운트 변수를 늘려준다
// 4. 가장 높은 점수를 받은 사람을 push (여럿일 경우 오름차순 정렬)