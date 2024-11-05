let todoList = ["Demo Task 1", "Demo Task 2"];

const listElement = document.getElementById("list");
const addButton = document.getElementById("addbtn")
const deleteButton = document.getElementById("deletebtn")

function updateTasks() {
	listElement.innerHTML = "";
	for (let i = 0; i < todoList.length; i++) {
		let newTaskElement = document.createElement("li"); // Create <li> element
		newTaskElement.textContent = todoList[i];  // Add text to li element
		listElement.appendChild(newTaskElement)
	}
}

function addTask(taskName) {
	todoList.push(taskName)
	updateTasks();
}

function deleteTask() {
	todoList.pop()
	updateTasks()
}

addButton.addEventListener("click", () => {
	const task = prompt("Enter task name")
	addTask(task)
})

deleteButton.addEventListener("click", () => {
	deleteTask()
})

updateTasks(); // telling javascript to execute the function

console.log(listElement);