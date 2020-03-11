var even = require('./get-even-numbers');
test('the even numbers in the array', function() {
	// Arrange
	var input = [ 22, 13, 73, 82, 4 ];
	var unchanged = [ 22, 13, 73, 82, 4 ];
	var expected = [ 22, 82, 4 ];
	// Act
	var result = even(input);
	// Assert
	expect(result).toEqual(expected);
	expect(input).toEqual(unchanged);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
