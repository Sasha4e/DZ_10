function myBind(cb, ...args) {
	return function() {
		return cb.call(...args)
	}
}

//TEST:

const user = {
	name: "Vasiliy",
	sayhello() {
		console.log(`Hello from ${this.lastName} ${this.name} ${this.middleName}`);
	}
};


function func(lastName, middleName) {
	this.middleName = middleName,
	this.lastName = lastName,
	this.sayhello();
}


const test = myBind(func, user, "Ivanov", "Olegovich");
test(); 

//Hello from Ivanov Vasiliy Olegovich
