/*
Write a function to check if an object is empty or not in javaScript?
How to check if an object is empty or not in javaScript?

isEmpty({}) returns true
isEmpty({key: 1}) returns false
*/

const obj = {};

function isEmpty(obj) {
	let size = Object.keys(obj).length;
	if (size === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(`is empty object: ${isEmpty(obj)}`);
