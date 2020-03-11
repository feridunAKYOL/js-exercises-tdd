var largerThanTen = require('./numbersGreaterThan10');

test('Get numbers greater than 10', function() {
	// arrange
	var input = [ 4, 10, 32, 9, 21 ];
	var unchanged = [ 4, 10, 32, 9, 21 ];
	var expected = [ 32, 21 ];
	// act
	var output = largerThanTen(input);
	// assert
	expect(output).toEqual(expected);
	expect(input).toEqual(unchanged);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
