var addCoffee = function (prevName, name) {
	setTimeout(function () {
		coffeeMaker.next(prevName ? prevName + ', ' + name : name);
	}, 500);
};

var coffeeGenerator = function* () {
	var espresso = yield addCoffee('', 'Espresso');
	console.log(espresso);
	var americano = yield addCoffee(espresso, 'Americano');
	console.log(americano);
	var mocha = yield addCoffee(americano, 'Cafe Mocha');
	console.log(mocha);
	var latte = yield addCoffee(mocha, 'Cafe Latte');
	console.log(latte);
};

var coffeeMaker = coffeeGenerator();
coffeeMaker.next();