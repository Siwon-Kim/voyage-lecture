// function solution(N, stages) {
// 	// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 	// N = 스테이지의 개수
// 	// stages = 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
// 	let result = new Array(N).fill(0)
// 	let totalUsers = stages.length;

// 	for(const stage of stages) if(stage <= N) result[stage-1]++; // 문자 처리

// 	let answer = []
//     for(let i in result) {
//         let failRate = result[i] / totalUsers
//         answer.push({ 'stage': Number(i)+1, 'failRate': failRate })
// 		totalUsers -= result[i]
//     }

//     answer.sort((a,b) => b.failRate - a.failRate)

//     answer = answer.map(e => e.stage)
// 	return answer
// }

function solution(N, stages) {
	// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
	// N = 스테이지의 개수
	// stages = 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
	let notClear = [];
	let clear = [];
	let result = []; // key-value
	for (let i = 0; i < N; i++) {
		// initialization
		notClear.push(0);
		clear.push(0);
	}
	let totalUsers = stages.length;
	let currStage = 0;
	let cntUsers = 0;

	stages.sort((a, b) => a - b);
	stages.forEach((stage) => {
		if (currStage === stage) {
			notClear[currStage - 1]++;
		} else {
			clear[currStage] = totalUsers - cntUsers; // 해당 스테이지 도전자
			currStage++;
			if (currStage === stage) {
				notClear[currStage - 1]++;
			}
		}
		cntUsers++;
	});

	console.log(notClear, clear);

	for (let i = 0; i < N; i++) {
		result.push({ stage: i + 1, failRate: notClear[i] / clear[i] });
	}
	console.log(result);
	result.sort((a, b) => {
		if (b["failRate"] === a["failRate"]) {
			return a - b; // 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 한다
		} else {
			return b["failRate"] - a["failRate"]; // 내림차순
		}
	});
	console.log(result);
	for (let i = 0; i < N; i++) {
		result[i] = result[i]["stage"];
	}
	console.log(result);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
