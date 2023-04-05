// 카운트 상태 변경 함수 #4
// 클로저 카운트 기능 확장(값 감소 기능 추가)
const counter = (function () {
	//카운트 상태 변수
	let num = 0;

	// 클로저인 메서드(increase, decrease)를 갖는 객체를 반환한다.
	// property는 public -> 은닉되지 않는다.
	return {
		increase() {
			return ++num;
		},
		decrease() {
			return num > 0 ? --num : 0;
		},
	};
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
