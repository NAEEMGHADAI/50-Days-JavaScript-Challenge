/*
Write a function to remove array element based on object property?
How to remove array element based on object property?

removeArrayElement("money") returns the array without the money object
removeArrayElement("id") returns the array without the id object
removeArrayElement("cStatus") returns the array without the cStatus object

*/

const array = [
	{ field: "id", operator: "eq" },
	{ field: "cStatus", operator: "eq" },
	{ field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
	let ans = array.filter((i) => i.field != filterField);
	return ans;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);
