function myBind(cb, ...args) {
	return function() {
		return cb.call(...args)
	}
}


const user = {
	name: "vasya",
	sayhello() {
		console.log(`Hello from ${this.name} ${this.lastName}`);
	}
};


function func(lastName) {
	this.lastName = lastName,
	console.log(this.name);
	this.sayhello();
}


const test = myBind(func, user);

test(); 
//vasya
// Hello from vasya

const test1 = func.bind(user, "Ivanov");
test1(); 