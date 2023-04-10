function solution(nums) {
	let typeObj = {};
    let typeObj2 = {};
    let answer;

    // reduce() 사용하기
    let hash = nums.reduce((x, type) => {
            x[type] = ++x[type] || 1;
            return x
        }, {});
        console.log(hash);

    nums.forEach(type => {
        // object에 저장 
        // undefined로 확인
        // (typeObj[type] === undefined)
        // ? typeObj[type] = 1
        // : typeObj[type] += 1;
        // console.log(typeObj);

        // hasOwnProperty로 확인
        // typeObj2.hasOwnProperty(type)
        // ? typeObj2[type] += 1
        // : typeObj2[type] = 1;
        // console.log(typeObj2);

        // 길이 Object.keys(typeObj).length
    })

    // forEach 돌면서 이미 존재하는지 확인
	// nums.forEach((type) => {
    //     let exists = false;
	// 	for (let obj of arr) {
	// 		if (type in obj) {
	// 			obj[type]++;
	// 			exists = true;
	// 			break;
	// 		}
	// 	}
	// 	if (!exists) {
	// 		object = {};
	// 		object[type] = 1;
	// 		arr.push(object);
	// 	}
	// });
    

	arr.length >= nums.length / 2 ? answer = Math.floor(nums.length / 2) : answer = arr.length;
    return answer
}
solution([3, 3, 3, 2, 2, 2]);

// 총 N마리의 포켓몬 절반을 가져가도 좋다 (N은 항상 짝수)
// 종류 - 번호로 구분
// arr = [{2: 2}, {3 : 3}, {4: 1}]
// arr.length >= nums.length / 2 return nums.length / 2
// arr.length < nums.length / 2 return arr.length

// // Set으로 풀기
// function solution(nums) {
// 	let answer;
// 	let kind = [...new Set(nums)];
// 	kind.length <= nums.length / 2
// 		? (answer = kind.length)
// 		: (answer = Math.round(nums.length / 2));
// 	return answer;
// }
