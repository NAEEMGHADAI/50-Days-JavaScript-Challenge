/*
Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples [7] should return 7, because it occurs 1 time (which is odd). [0] should return 0, because it occurs 1 time (which is odd). [1,1,2] should return 2, because it occurs 1 time (which is odd). [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd). [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

CHALLENGES (3/3 DONE)

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) should return 5
findOdd([1,1,1,1,1,1,10,1,1,1,1]) should return 10
findOdd([5,4,3,2,1,5,4,3,2,10,10]) should return 1

*/

function findOdd(arr) {
	arr.forEach((element, key) => {
		arr[key] = element.toString();
	});
	const counts = {};
	arr.forEach(function (x) {
		counts[x] = (counts[x] || 0) + 1;
	});

	for (const key in counts) {
		if (Object.hasOwnProperty.call(counts, key)) {
			if (counts[key] % 2 !== 0) {
				return parseInt(key);
			}
		}
	}
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
