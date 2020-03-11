var removeVowelsForWords = require('./remove-vowels-in-array');
test('remove vowels from all words in array', function() {
	// Arrange
	var input = [ 'Irina', 'Etza', 'Daniel' ];
	var unchanged = [ 'Irina', 'Etza', 'Daniel' ];
	var expected = [ '__i_a', '___a', '_a_ie_' ];
	// Act
	var output = removeVowelsForWords(input);
	// Assert
	expect(output).toEqual(expected);
	expect(input).toEqual(unchanged);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
