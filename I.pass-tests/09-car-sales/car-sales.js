let total = {
	Ford: 0,
	Honda: 0,
	'Land Rover': 0,
	Toyota: 0
};
function sum(arr) {
	for (let car of arr) {
		if (car.make == 'Ford') {
			total.Ford = total.Ford + Number(car.price);
		}
		if (car.make == 'Honda') {
			total.Honda += Number(car.price);
		}
		if (car.make == 'Land Rover') {
			total['Land Rover'] += Number(car.price);
		}
		if (car.make == 'Toyota') {
			total.Toyota += Number(car.price);
		}
	}
	return total;
}
module.exports = sum;
