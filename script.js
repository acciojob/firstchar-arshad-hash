function firstChar(text) {
  // your code here
	let firstChar=text.trim();
	return firstChar.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
