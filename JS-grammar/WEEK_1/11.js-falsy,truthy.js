// Falsy and Truthy
// Falsy values are values that are considered false when encountered in a Boolean context.
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

if (0) {
	console.log("Falsy: not executed");
}

if ("") {
	console.log("Falsy: not executed");
}

if (null) {
	console.log("Falsy: not executed");
}

if (undefined) {
	console.log("Falsy: not executed");
}

if (NaN) {
	console.log("Falsy: not executed");
}

if (false) {
	console.log("Falsy: not executed");
}
