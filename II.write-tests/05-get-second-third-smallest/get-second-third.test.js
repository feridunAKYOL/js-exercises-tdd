var secondThird = require('./get-second-third');
test('second and third element of an array after sorted from smallest to biggest', function() {
	// Arrange
	var input = [ 90, 5, 11, 8, 6 ];
	var unchanged = [ 90, 5, 11, 8, 6 ];
	var expected = [ 6, 8 ];
	// Act
	var result = secondThird(input);
	// Assert
	expect(result).toEqual(expected);
	expect(input).toEqual(unchanged);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
