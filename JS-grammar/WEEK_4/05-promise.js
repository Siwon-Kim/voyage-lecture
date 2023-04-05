// new Promise(function (resolve) {
// 	setTimeout(function () {
// 		var name = 'Espresso';
// 		console.log(name);
// 		resolve(name);
// 	}, 500);
// }).then(function (prevName) {
// 	return new Promise(function (resolve) {
// 		setTimeout(function () {
// 			var name = prevName + ', Americano';
// 			console.log(name);
// 			resolve(name);
// 		}, 500);
// 	});
// }).then(function (prevName) {
// 	return new Promise(function (resolve) {
// 		setTimeout(function () {
// 			var name = prevName + ', Cafe Mocha';
// 			console.log(name);
// 			resolve(name);
// 		}, 500);
// 	});
// }).then(function (prevName) {
// 	return new Promise(function (resolve) {
// 		setTimeout(function () {
// 			var name = prevName + ', Cafe Latte';
// 			console.log(name);
// 			resolve(name);
// 		}, 500);
// 	});
// });

// Refactoring
// refactoring
var addCoffee = (name) => {
	return function (prevName) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				var newName = prevName ? `${prevName}, ${name}` : name;
				console.log(newName);
				resolve(newName);
			}, 500);
		});
	};
};

addCoffee('Espresso')()
	.then(addCoffee('Americano'))
	.then(addCoffee('Cafe Mocha'))
	.then(addCoffee('Cafe Latte'));
