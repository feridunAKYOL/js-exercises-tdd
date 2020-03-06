var getWordLengths = function(someWords) {
	var wordLength = [];
	for (word of someWords) {
		wordLength.push(word.length);
	}
	return wordLength;
};

module.exports = getWordLengths;
