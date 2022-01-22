const str = "JavaScript is awesome";

function reverseAString(str) {
	// write your solution here
	// const rev = [];
	// let j = 0;
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	rev[j] = str[i];
	// 	j++;
	// }
	const rev = str.split("").reverse().join("");
	return rev;
}

console.log(`Reversed string is: ${reverseAString(str)}`);
