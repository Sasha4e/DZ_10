function myBind(cb, ...arg) {
	return function() {
		return cb.call(...arg)
	}
}


var user = {
	name: "vasya",
	sayhello() {
		console.log(`Hello from ${this.name}`);
	}
};


function func() {
	console.log(this.name);
	this.sayhello();
}


const test = myBind(func, user);

test(); 
//vasya
// Hello from vasya