// Вам нужно создать список задач (объект), который умеет:

// добавлять новые задачи. У каждой задачи есть статус, текст и уникальный id.
// удалять задачу
// редактировать задачу
// изменять статус заметки на "выполненно"


// Вам нужно оформить это, как объект с методами, которые нельзя удалять и редактировать + сам объект
// не должен быть расширяем.

const toDo = {
	_toDoList: []
}

Object.defineProperties(toDo, {

	'toDoList': {
		get: function() {
			return this._toDoList;
		},

		set: function(value) {
			this._toDoList = value;
		}
	},

	'add': {
		value: function(taskName) {
				toDo.toDoList.push({
					task: taskName,
					id: Date.now(),
					complite: false
				})
		}
	},

	'delete': {
		value: function(taskName) {
			for (let i = 0; i < toDo.toDoList.length; i++) {
				if (toDo.toDoList[i].task === taskName) {
					toDo.toDoList.splice(i, 1)
				}
			}
		}
	},


	'edit': {
		value: function(taskName, newTaskName) {
			for (let i = 0; i < toDo.toDoList.length; i++) {
				if (toDo.toDoList[i].task === taskName) {
					toDo.toDoList[i].task = newTaskName
				}
			}
		}
	},


	'done': {
		value: function(taskName) {
			for (let i = 0; i < toDo.toDoList.length; i++) {
				if (toDo.toDoList[i].task === taskName) {
					toDo.toDoList[i].complite = !toDo.toDoList[i].complite
				}
			}
		}
	}

});

Object.freeze(toDo);