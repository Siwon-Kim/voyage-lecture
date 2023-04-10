function solution(d, budget) {
    let answer = 0
    let trackSum = 0
    d.sort((v1, v2) => v1 - v2) // 오름차순 sort
    for(let i = 0; i < d.length; i++) {
        trackSum += d[i]
        if(trackSum > budget) { // 가장 작은 수부터 더했기 때문에 일단 budget을 넘기게만 되면 그때가 최대한 지원해줄 수 있는 부서의 개수가 된다
            answer = i
            break;
        }
    }
    if(trackSum <= budget) { // 다 더했는데 budget과 같거나 적으면 d의 길이가 부서의 개수가 된다
        answer = d.length
    }
    return answer;
}

solution([1,3,2,5,4], 9)