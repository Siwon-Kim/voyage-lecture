// lottos forEach win_nums.includes()
// 0이 몇 갠지.
function solution(lottos, win_nums) {
    let cntZero = 0
    let matchNum = 0, rank = 6
    let result = []
    lottos.forEach((e, i) => {
        if(win_nums.includes(e)) {
            matchNum++;
            if(matchNum > 1) {
                rank--;
            }
        }
        if(e === 0) {
            cntZero++;
        }
    })

    // 하나도 안 맞음, cntZero
    // 최고 순위
    if(matchNum === 0 && cntZero !== 0) {
        result.push(rank - cntZero + 1)
    } else {
        result.push(rank - cntZero)
    }

    // 최저 순위
    result.push(rank)
    
    return result
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
// result [3, 5] 최고 순위, 최저 순위

// 일단 알고 있는 번호에 한에서만 순위 찾기: 최저 순위
// 최고 순위는 모르고 있는 번호가 다 맞았을 경우

