/*
    Ask the Bob
    Instructions
    Bob is a lackadaisical teenager. In conversation, his responses are very limited.

    Bob answers 'Sure.' if you ask him a question, such as "How are you?".

    He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

    He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

    He says 'Fine. Be that way!' if you address him without actually saying anything.

    He answers 'Whatever.' to anything else.

    Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.

    CHALLENGES (0/2 DONE)

    Any random string will be passed, it should work as asked
    Any random string will be passed, it should work as asked
    index.js

 */

function endWith(m) {
	const val = m.endsWith("?");
	return val;
}

function isUpperCase(m) {
	return m === m.toUpperCase();
}

function hey(message) {
	if (endWith(message) && isUpperCase(message)) {
		return "Calm down, I know what I'm doing!";
	} else if (endWith(message)) {
		return "Sure.";
	} else if (isUpperCase(message)) {
		return "Whoa, chill out!";
	} else if (!endWith(message) && !isUpperCase(message)) {
		return "Fine. Be that way!";
	} else {
		return "Whatever.";
	}
}

console.log(hey("HSZDGKBAGJAER?"));
