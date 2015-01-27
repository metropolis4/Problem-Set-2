// Problem 1.
var firstReverse = function(word) {
	reverse = [];
	var wordArray = word.split('');
	for(i=wordArray.length -1; i >=0; i--) {
		reverse.push(wordArray[i]);
	}
	return reverse.toString();
};

// Problem 2.
var swapCase = function(string) {
	string = string.split('');

	for(var i in string) {
		
		if(string[i] === string[i].toUpperCase()) {
			string[i] = string[i].toLowerCase();
		}
		else {
			string[i] = string[i].toUpperCase();
		}
	}

	return string.toString().replace(/,/g , '');
};
