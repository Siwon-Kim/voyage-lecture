function solution(n) {
    let toStr = n.toString()
    var answer = [...toStr].reverse();
    answer.forEach((e, i) => {
        answer[i] = Number(e)
    })
    return answer;
}