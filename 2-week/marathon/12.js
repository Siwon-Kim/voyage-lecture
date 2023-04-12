function solution(price, money, count) {
    var answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i
    }
    let result = answer - money

    if (result < 0) {
        return 0
    } else {
        return result
    }
}