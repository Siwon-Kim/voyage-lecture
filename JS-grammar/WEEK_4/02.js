// Callback function is a function
// If we pass the object's method through the callback function, the method is not the method but the function
var obj = {
	vals: [1, 2, 3],
	logValues: function (v, i) {
        if(this === global) {
            console.log('this is global');
        } else {
            console.log(this, v, i);
        }
	},
};

// call logValues() as a method
obj.logValues(1, 2);

// callback => this is not calling a method
// we just pass the function (not related to the obj object)
[4, 5, 6].forEach(obj.logValues);
