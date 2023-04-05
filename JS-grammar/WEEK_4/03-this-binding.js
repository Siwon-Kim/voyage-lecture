// this binding
// bind different value to this inside the callback function

// 1. traditional way
var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};

// // 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// // 메서드가 아닌 함수로서 호출한 것과 동일하죠.
// var callback = obj1.func();
// setTimeout(callback, 1000);


// 2. refactoring the traditional way

// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj2 = {
	name: 'obj2',
	func: obj1.func
};

var callback2 = obj2.func();
setTimeout(callback2, 1000); // obj2

// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 1500); // obj3


// 3. by using bind()
var objBind1 = {
	name: 'objBind1',
	func: function () {
		console.log(this.name);
	}
};
//함수 자체를 obj1에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
setTimeout(objBind1.func.bind(objBind1), 2000); // obj1

var objBind2 = { name: 'objBind2' };
//함수 자체를 obj2에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
setTimeout(objBind1.func.bind(objBind2), 2500); // obj2