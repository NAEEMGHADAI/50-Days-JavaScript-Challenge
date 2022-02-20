/*
WeIrD StRiNg CaSe
Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

CHALLENGES (3/3 DONE)

toWeirdCase('This') returns 'ThIs'
toWeirdCase('This is a test') returns 'ThIs iS A TeSt'
toWeirdCase('A test case') returns 'A TeSt cAsE'
index.js
1
*/

function toWeirdCase(string) {
	let strArr = string.split("");
	console.log(strArr);
	strArr.forEach((element, index) => {
		if (index % 2 === 0) {
			strArr[index] = element.toUpperCase();
		}
	});
	return strArr.join("");
}

console.log(
	`The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
