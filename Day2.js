/*
Write a program to reverse a string
String can be reversed by iterating it and storing it in reverse order
String can also be reversed by converting it to array, then joining it after reversing

reverseAString("JavaScript is awesome") should return "emosewa si tpircSavaJ"
reverseAString("Peter Parker is Spiderman") should return "namredipS si rekraP reteP"
reverseAString("codedamn") should return "nmadedoc"

*/

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
