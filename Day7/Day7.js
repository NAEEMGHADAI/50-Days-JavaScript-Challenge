/*
Create a regular expression to validate if the given input is valid Indian mobile number or not
Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
test method of regular expression can be used to validate if the mobile number pattern matches or not

validateMobile('+919876543210') returns true
validateMobile('+91 9876543210') returns true
validateMobile('09876543210') returns true
validateMobile('9876543210') returns true
validateMobile('99876543210') returns false
*/

const number = "+91 9876543210";

function validateMobile(number) {
	if (number.startsWith("+91") || number.startsWith("0")) {
		if (number.startsWith("+91") && number.length >= 13) {
			return true;
		}
		if (number.startsWith("0") && number.length >= 11) {
			return true;
		}
	}
	if (number.length === 10) {
		return true;
	}
	return false;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
