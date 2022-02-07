/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
	let ans = 0;
	let count = 0;
	inputArray.sort((a, b) => a - b);
	const tempArr = [];
	tempArr.push(inputArray[0]);
	for (let index = 1; index < inputArray.length; index++) {
		if (inputArray[index] != inputArray[index - 1]) {
			tempArr.push(inputArray[index]);
		}
	}

	for (let index = 0; index < tempArr.length; index++) {
		if (index > 0 && tempArr[index] == tempArr[index - 1] + 1) {
			count += 1;
		} else {
			count = 1;
		}
		ans = Math.max(ans, count);
	}
	return ans;
};

console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
