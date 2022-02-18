/*
Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels

The input can consit of Lower case and upper case letters so make sure to count both of them.

CHALLENGES (3/3 DONE)

getCount("abracadabra") should return 5
getCount("THe Strings are SOO COOL") should return 8
getCount("There exists only 5 vowels") should return 7

*/

function getCount(str) {
	let vowelsCount = 0;
	let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

	const counts = {};
	str = str.split("");
	str.forEach(function (x) {
		counts[x] = (counts[x] || 0) + 1;
	});
	console.log(counts);

	for (const key in counts) {
		if (Object.hasOwnProperty.call(counts, key)) {
			for (let index = 0; index < vowels.length; index++) {
				if (key === vowels[index]) {
					vowelsCount = vowelsCount + counts[key];
				}
			}
		}
	}

	return vowelsCount;
}

console.log(getCount("There exists only 5 vowels"));
