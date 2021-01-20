/*Вам нужно, написать функцию, которая принимает 1 параметр. При первом вызове,
она его запоминает, при втором — суммирует переданый параметр с тем,
что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

Это не все. Возьмите счетчик, который мы писали в классе и добавьте ему возможность
задавать начальное значение и шаг счетчика при инициализации и метод для сброса к начальному значению. */

//	#1
function counter() {
		let count = 0;
		return function(value) {
			return count += value;
		}
};

let sum = counter();

console.log(sum(3)); //3
console.log(sum(5)); //8
console.log(sum(20)); //28 


//	#2
function makeCounter(value, step) {
	let startCount = value;
	return function(reset) {
		if(reset === 'reset') {
			startCount = 0;
			step = 0;
		}
		return startCount += step;
  	};
}

let testCounter = makeCounter(2, 4);

console.log(testCounter()); //6
console.log(testCounter()); //10
console.log(testCounter()); //14
console.log(testCounter()); //18
console.log(testCounter()); //22
testCounter('reset');	
console.log(testCounter()); //0



