/*
Write a program to find the most frequent item of an array
Input
const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Output
a 5
CHALLENGES (0/2 DONE)

mostFreq([1, 2, 2, 4, 5, 6, 6]) returns 2 2
mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) returns a 5
*/

function mostFreq(arr) {
	const counts = {};
	arr.forEach(function (x) {
		counts[x] = (counts[x] || 0) + 1;
	});
	let max = 0;
	let maxKey = 0;
	for (const key in counts) {
		if (Object.hasOwnProperty.call(counts, key)) {
			if (counts[key] > max) {
				max = counts[key];
				maxKey = key;
			}
		}
	}
	return `${maxKey} ${max}`;
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));
