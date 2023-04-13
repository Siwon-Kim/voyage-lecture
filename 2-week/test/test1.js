function findChanges(price) {
	const payment = 1000;
	const changes = [500, 100, 50, 10];
	let [countChanges, left] = [0, payment - price];

	// 축적기로 사용할 수 있는 reduce를 통해 각 동전의 종류를 순회하며 거스름돈의 개수를 누적시킨다
    countChanges = changes.reduce((acc, change) => {
		// 기존 값에 현재 동전 종류의 값을, 거슬러주어야 하는 값으로 나눈 몫을 더한다
        let accTotal = acc + Math.floor(left / change);

		// 아직 남아있는 거스름돈을 나머지값으로 갱신한다
        left = left % change;
        return accTotal;
    }, 0)
    
	return countChanges;
}

console.log(findChanges(160)); // 8
