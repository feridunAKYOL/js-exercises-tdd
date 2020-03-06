function secondLargest(numbers) {
	let arr = numbers.sort(compareNumbers);
	return numbers[arr.length - 2];
}
function compareNumbers(a, b) {
	return a - b;
}
module.exports = secondLargest;
