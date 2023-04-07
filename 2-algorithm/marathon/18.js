function solution(seoul) {
    let result;
    seoul.forEach((e, i) => {
        if(e === "Kim") {
            result = `김서방은 ${i}에 있다`
        }
    })
    return result
}