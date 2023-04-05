var addCoffee = function (name) {
	return new Promise(function (resolve) {
		setTimeout(function(){
			resolve(name);
		}, 500);
	});
};
var coffeeMaker = async function () {
// var coffeeMaker = async () => {
	var coffeeList = '';
	var _addCoffee = async function (name) {
		coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
	};
    // wait until _addCoffee() is done
	await _addCoffee('Espresso');
    // execute after _addCoffee('Espresso') is done
	console.log(coffeeList);
	await _addCoffee('Americano');
	console.log(coffeeList);
	await _addCoffee('Cafe Mocha');
	console.log(coffeeList);
	await _addCoffee('Cafe Latte');
	console.log(coffeeList);
};
coffeeMaker();