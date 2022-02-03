/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	let result = [];
	let temp = "";
	let sum = 0;

	for (let i = digits.length - 1; i >= 0; i--) {
		temp = digits[i] + temp;
	}
	sum = parseInt(temp);

	while (sum > 0) {
		result.unshift(sum % baseB);
		sum = Math.floor(sum / baseB);
	}

	return result;
};
console.log(convertDigitsToAskedBase([5, 8], 10, 16));
