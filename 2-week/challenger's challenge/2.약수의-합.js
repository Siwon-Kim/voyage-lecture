function solution(n) {
    let sum = 0
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            sum += i
            if(i != Math.sqrt(n)) sum += Math.floor(n / i)
        }
    }
    console.log(sum);
}

solution(5)