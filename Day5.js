const str = "JavaScript";

function getTheGapX(str) {
	let gap = 0;
	let i = str.indexOf("X");
	let j = str.lastIndexOf("X");
	gap = j - i;
	if (i == -1 && j == -1) {
		return -1;
	}
	return gap;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
