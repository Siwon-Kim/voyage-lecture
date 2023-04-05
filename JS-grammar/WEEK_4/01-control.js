// Callback function Control
// 1. get a control of when to call
// setInterval(): repeatedly perform the logic received from the callback as a paramter
// cbFunc를 단독으로 호출할 경우 호출 시점에 대한 제어는 불가
// 그러나 콜백함수로 넣어줄 경우 setInterval()이 호출 시점 제어를 할 수 있음
var count = 0;
var cbFunc = function () {
	console.log(count);
	if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 3000);

// 2. get a control of the parameters
// map(): create a new array with the results of calling a provided function on every element in the calling array
// map() should return a new array
var newArr = [10, 20, 30].map(function (currVal, index) {
	console.log(currVal, index);
	return currVal * 2;
});

console.log(newArr); // [20, 40, 60]

// 3. get a control of this
// callback function is a function where this will be the global object
// BUT, if the callback function explicity sets the value of this, then it will be the value of this
Array.prototype.mapByMe = function (callback, thisArg) {
	var mappedArr = [];

	for (var i = 0; i < this.length; i++) {
		var mappedValue = callback.call(thisArg || global, this[i]); // first argument: if thisArg exists, use thisArg, otherwise use global & second argument: current value
		mappedArr[i] = mappedValue;
	}
	return mappedArr;
};

const newArr = [1, 2, 3].mapByMe((item) => {
	return item * 2;
});

console.log(newArr);

// so, to take over the control for this while using map() or other methods, we can explicity put this as a second argument
