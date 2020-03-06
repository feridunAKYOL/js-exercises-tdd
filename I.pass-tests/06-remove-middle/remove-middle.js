function d(arr) {
	let remove = [];
	let index = (arr.length - 1) / 2;
	remove.push(arr[index]);
	arr.splice(index, 1);
	return remove;
}
module.exports = d;
