function solution(n) {
    let numSqrt = Math.sqrt(n)
    if(numSqrt % 1 === 0) {
        return (numSqrt+1)**2
    } else {
        return -1
    }
}