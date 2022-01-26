const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
	let words = str.split(" ");
	const element = [];
	for (let index = 0; index < wordLimit; index++) {
		element[index] = words[index];
	}
	let truncate = element.join(" ");
	return truncate;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
