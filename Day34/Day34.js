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
