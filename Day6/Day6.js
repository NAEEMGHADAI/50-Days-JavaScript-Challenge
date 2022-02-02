/*
Write a function to truncate a string to a certain number of words
Truncate a string to a certain number of words

truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"
*/

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
