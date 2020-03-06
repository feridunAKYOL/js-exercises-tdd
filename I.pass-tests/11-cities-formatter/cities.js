function format(capitals) {
	arr = [];
	for (let stad of capitals) {
		arr.push(stad.city + ' is the capital of ' + stad.country);
	}
	return arr;
}
module.exports = format;
