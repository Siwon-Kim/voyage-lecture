function solution(numbers) {
    let result = []
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j])
        }
    }
    const tmpSet = new Set(result)
    result = [...tmpSet]
    return result.sort((a, b) => a - b)
}

solution([2,1,3,4,1])
// 1. numbers에서 이중 for loop을 돌면서 각각 더해준다
// 2. 더한 값을 result에 push한다
// 3. result를 new Set()을 통해 중복 제거한다 - const set1 = new Set([1, 2, 3, 4, 5]);
// 4. result를 sort()를 통해 오름차순 나열한다 