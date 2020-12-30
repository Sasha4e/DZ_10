function getValues(obj) {
	var arr = [];
	for (key in obj) {
		arr.push(obj[key])
	}
	return arr;
}

var testObj = {
	name: 'Sasha',
	lastName: 'Cherniavsky',
	gender: 'male',
	address: 'Odessa'
}

console.log(getValues(testObj));


/////////////////////////////////////

function getKeys(obj) {
	var arr = [];
	for (key in obj) {
		arr.push(key)
	}
	return arr;
}

console.log(getKeys(testObj));


////////////////////////////////////

function getEntries(obj) {
	var arr = []
	for (key in obj) {
		arr.push([key, obj[key]])
	}

	return arr;
}

console.log(getEntries(testObj));