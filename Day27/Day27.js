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
