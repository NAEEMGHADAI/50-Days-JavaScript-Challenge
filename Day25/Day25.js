function spinWords(string) {
	var str = "";
	str = string;
	let array = str.split(" ");
	array.forEach((element, index) => {
		if (element.length >= 5) {
			let elem = element.split("").reverse().join("");
			array[index] = elem;
		}
	});
	return array.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
