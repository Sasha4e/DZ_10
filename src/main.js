const toDo = {
	_toDoList: [],
}

Object.defineProperties(toDo, {

	'toDoList': {
		get: function() {
			return this._toDoList
		},

		set: function(value) {
			this._toDoList = value
		}
	},

	'getIndex': {
		value: function(value) {
			return this.toDoList.findIndex(note => note.task === value)
		},
	},

	'newError': {
		value: function(value) {
			throw `Error. You already had "${value}" note`
		}
	},

	'add': {
		value: function(taskName) {
			const { toDoList, newError } = this
			if (toDoList.some(note => note.task === taskName))
				newError(taskName)

				toDoList.push({
					task: taskName,
					id: Date.now(),
					complete: false
			})
		}
	},

	'delete': {
		value: function(taskName, isSure = false) {
			const { toDoList } = this
			if (isSure)
				toDoList.splice(this.getIndex(taskName), 1)
		}
	},

	'edit': {
		value: function(taskName, newTaskName, isSure = false) {
				const { toDoList, newError } = this
				if (toDoList.some(note => note.task === newTaskName))
					newError(newTaskName)
				if (isSure) 
					toDoList[this.getIndex(taskName)].task = newTaskName
			
		}
	},

	'done': {
		value: function(taskName) {
			const { toDoList } = this
			toDoList[this.getIndex(taskName)].complete = !toDoList[this.getIndex(taskName)].complete
		}
	},

	'status': {
		value: function() {
			const { toDoList } = this
			let completeCount = 0;
			toDoList.forEach((value) => {
				if (value.complete) completeCount++
			})

			return (
				`
					Всего задач: ${toDoList.length},
					Выполнено задач: ${completeCount}
					Осталось выполнить задач: ${toDoList.length - completeCount}
				`
			)
		}
	}

});

Object.freeze(toDo);

toDo.add("hello world");
toDo.add("hello world1");
toDo.add("hello world2");
toDo.add("hello world3");
toDo.add("hello world4");
toDo.delete("hello world2", confirm(`are you sure you want to delete this note?` ));
toDo.edit("hello world", "hello world5", confirm(`are you sure you want to edit this note?`));
toDo.done("hello world3");

console.log(toDo.toDoList);
console.log(toDo.status());
