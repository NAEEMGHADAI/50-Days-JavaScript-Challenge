/*
Determine if a sentence is a pangram
Instructions
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

Determine if a sentence is a pangram
Determine if a sentence is a pangram
*/

const isPangram = (input) => {
	input = input.toLowerCase();
	const allAlpha = "abcdefghijklmnopqrstuvwxyz";
	const alphaArr = allAlpha.split("");
	for (let index = 0; index < input.length; index++) {
		const elem = input[index];
		const i = alphaArr.indexOf(elem);
		if (i !== -1) {
			alphaArr.splice(i, 1);
		}
	}
	return !alphaArr.length;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
