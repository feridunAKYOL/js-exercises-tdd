// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function averaged(arr) {
	let sum = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			sum = sum + Number(arr[i]);
			count = count + 1;
		}
	}
	return sum / count;
}
module.exports = averaged;
