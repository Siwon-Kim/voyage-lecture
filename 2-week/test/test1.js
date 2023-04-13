function findChanges(price) {
	const payment = 1000;
	const changes = [500, 100, 50, 10];
	let [count_changes, diff] = [0, payment - price];

	while (diff !== 0) {
		// 500원 체크
		count_changes += Math.floor(diff / 500);
		diff = diff % 500;

		// 100원 체크
		count_changes += Math.floor(diff / 100);
		diff = diff % 100;

		// 50원 체크
		count_changes += Math.floor(diff / 50);
		diff = diff % 50;

		// 10원 체크
		count_changes += Math.floor(diff / 10);
		diff = diff % 10;
	}
    // count_changes = changes.reduce((acc, change) => {
    //     let accTotal = acc + Math.floor(diff / change);
    //     diff = diff % change;
    //     return accTotal;
    // })
    
	return count_changes;
}

console.log(findChanges(160)); // 8
