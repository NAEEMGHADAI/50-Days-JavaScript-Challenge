/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form.

For example:

expandedForm(12); // Should return '10+2'
expandedForm(42); // Should return '40+2'
CHALLENGES (3/3 DONE)

expandedForm(12) should return '10+2'
expandedForm(42) should return '40+2'
expandedForm(734) should return '700+30+4'

*/

function expandedForm(num) {
	let sum = "";
	let copy = num;
	let arr = [];
	while (copy > 0) {
		let part = parseInt(copy % 10);
		arr.push(part);
		copy = parseInt(copy / 10);
	}
	for (let index = arr.length - 1; index >= 0; index--) {
		if (index === arr.length - 1) {
			let digit = arr[index];
			for (let i = arr.length - 1; i > 0; i--) {
				digit = digit * 10;
			}
			sum = digit;
		} else {
			let digit = arr[index];
			for (let i = index; i > 0; i--) {
				digit = digit * 10;
			}
			sum = sum + "+" + digit;
		}
	}
	return sum;
}

console.log(expandedForm(21));
