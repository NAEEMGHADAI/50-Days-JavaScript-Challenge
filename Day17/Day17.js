/*
Longest Consecutive Sequence
Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order.

Example
Input: [100,4,200,1,3,2]

Output: 4 // LCS [1, 2, 3, 4]

Conceptually this is how it should work.
Copy all the elements of the array in a set. Iterate the array and in each iteration determine if the current element will lead to new subsequence by checking if there is no element less than the current, present in the set. Then find how long this subsequence can be by incrementing the count till there is consecutive elements in the set. In the end return the longest consecutive sequence.

CHALLENGES (0/2 DONE)

longestConsecutiveSequence([100,4,200,1,3,2]) returns 4
longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1]) returns 9
*/

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
