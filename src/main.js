// function myBind(cb, ...args) {
// 	return function() {
// 		return cb.call(...args)
// 	}
// }

function myBind(cb, context, ...args) {
	return function(...contextArgs) {
		const allArgs = [...args, ...contextArgs]
		return cb.apply(context, allArgs);
	}
}

//TEST:

const user = {
	name: "Vasiliy",
	say(word) {
		console.log(`${word} from ${this.lastName} ${this.name} ${this.middleName}`);
	}
};


function func(lastName, middleName, word) {
	this.middleName = middleName,
	this.lastName = lastName,
	this.say(word);
}


const test = myBind(func, user, "Ivanov", "Olegovich");
test("Hello"); 

//Hello from Ivanov Vasiliy Olegovich
