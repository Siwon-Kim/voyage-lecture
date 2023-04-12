// 3진법 뒤집기
// parseInt(, 3)
// 10 -> N : value.toString(N)
// N -> 10 : parseInt(value, N)
// arr로 바꿔서?

function solution(n) {
	n = n.toString(3); // 3진법으로 변환
    let arr = [...n] // array로 변환
    arr = arr.reverse() // 순서 뒤집기
    n = arr.join("") // 다시 string으로 변환
	n = parseInt(n, 3); // 다시 10진법으로 변환
	console.log(n);
}

solution(45);
