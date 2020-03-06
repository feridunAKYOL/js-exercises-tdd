module.exports = function(myArray) {
	let result = [];
	for (i = 0; i < myArray.length; i++) {
		result.push(myArray[i] + 1);
	}
	return result;
};
