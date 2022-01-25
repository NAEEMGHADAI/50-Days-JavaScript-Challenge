/*
Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively
If the match is not found, these methods return -1

getTheGapX('XeroX') returns 4
getTheGapX('Xamarin') returns 0
getTheGapX('JavaScript') returns -1
getTheGapX("F(X) !== G(X) !== F(X)") returns 18
*/

const str = "JavaScript";

function getTheGapX(str) {
	let gap = 0;
	let i = str.indexOf("X");
	let j = str.lastIndexOf("X");
	gap = j - i;
	if (i == -1 && j == -1) {
		return -1;
	}
	return gap;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
