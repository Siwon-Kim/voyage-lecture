function solution(N, stages) {
	// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
	// N = 스테이지의 개수
	// stages = 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
	let result = new Array(N).fill(0)
	let totalUsers = stages.length;

	for(const stage of stages) if(stage <= N) result[stage-1]++; // 문자 처리
    
	let answer = []
    for(let i in result) {
        let failRate = result[i] / totalUsers
        answer.push({ 'stage': Number(i)+1, 'failRate': failRate })
		totalUsers -= result[i]
    }

    answer.sort((a,b) => b.failRate - a.failRate)

    answer = answer.map(e => e.stage)
	return answer
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
