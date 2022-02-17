/*
Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

CHALLENGES (3/3 DONE)

spinWords("Hey fellow warriors") should return"Hey wollef sroirraw"
spinWords("You are almost to the last test") should return "You are tsomla to the last test"
spinWords("Seriously this is the last one")
*/

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
