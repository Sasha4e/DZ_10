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

	'add': {
		value: function(taskName) {
			
			if (this.toDoList.some(note => note.task === taskName))
				throw `Error. You already had "${taskName}" note`

			toDo.toDoList.push({
				task: taskName,
				id: Date.now(),
				complete: false
			})
		}
	},

	'delete': {
		value: function(taskName, isSure = false) {
			if (isSure)
				this.toDoList.splice(this.getIndex(taskName), 1)
		}
	},

	'edit': {
		value: function(taskName, newTaskName, isSure = false) {
			
				if (this.toDoList.some(note => note.task === newTaskName))
					throw `Error. You already had "${newTaskName}" note`
				if (isSure) 
					this.toDoList[this.getIndex(taskName)].task = newTaskName
			
		}
	},

	'done': {
		value: function(taskName) {
			this.toDoList[this.getIndex(taskName)].complete = !this.toDoList[this.getIndex(taskName)].complete
		}
	},

	'status': {
		value: function() {
			completeCount = 0;
			this.toDoList.forEach((value) => {
				if (value.complete) completeCount++
			})

			return (
				`
					Всего задач: ${this.toDoList.length},
					Выполнено задач: ${completeCount}
					Осталось выполнить задач: ${this.toDoList.length - completeCount}
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
