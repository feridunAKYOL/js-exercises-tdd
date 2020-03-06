let total = 0;
function addNumbers(numbers) {
	const sum = numbers.reduce((total, item) => total + item);
	return sum;
}
module.exports = addNumbers;
