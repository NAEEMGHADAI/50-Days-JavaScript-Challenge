/*
Return the N-th value of the Fibonacci sequence

function fibonacci(n) returns the N-th value of the Fibonacci sequence
*/

function fibonacci(n) {
	let f = 1;
	let s = 1;
	let val = 0;
	for (let index = 0; index < n - 1; index++) {
		val = f + s;
		f = s;
		s = val;
	}
	return val;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);
