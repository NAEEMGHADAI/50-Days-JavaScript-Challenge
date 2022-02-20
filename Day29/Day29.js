/*
Mumbling
Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.

Only alphabets are passed as arguments for the accum(s) funciton

Example: accum("ZpglnRxqenU") should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

CHALLENGES (3/3 DONE)

accum("ZpglnRxqenU") returns "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum("NyffsGeyylB") returns "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
accum("MjtkuBovqrU") returns "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
*/

function accum(s) {
	let copy = [];
	let strArr = s.split("");
	strArr.forEach((element, i) => {
		for (let index = i; index >= 0; index--) {
			if (index === i) {
				copy.push(element.toUpperCase());
			} else {
				copy.push(element.toLowerCase());
			}
		}
		if (strArr.length !== i + 1) {
			copy.push("-");
		}
	});
	return copy.join("");
}
console.log(accum("ZpglnRxqenU"));
