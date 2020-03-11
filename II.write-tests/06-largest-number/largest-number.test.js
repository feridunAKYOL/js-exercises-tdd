var largest = require('./largest-number');
test('the largest number in the array', function() {
	// Arrange
	var input = [ 3, 21, 88, 4, 36 ];
	var unchanged = [ 3, 21, 88, 4, 36 ];
	var expected = 88;
	// Act
	var result = largest(input);
	// Assert
	expect(result).toEqual(expected);
	expect(input).toEqual(unchanged);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
