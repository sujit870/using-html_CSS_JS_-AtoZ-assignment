// crud.js
function createTask(taskTitle) {
  let todoList = JSON.parse(localStorage.getItem("todo")) || [];
  const newTask = {
    id: todoList.length + 1,
    isCompleted: false,
    title: taskTitle,
  };
  todoList.push(newTask);
  localStorage.setItem("todo", JSON.stringify(todoList));
  updateTodoList();
}

function deleteTask(id) {
  let todoList = JSON.parse(localStorage.getItem("todo")) || [];
  todoList = todoList.filter((task) => task.id !== id);
  localStorage.setItem("todo", JSON.stringify(todoList));
  updateTodoList();
}

function updateTask(id) {
  let todoList = JSON.parse(localStorage.getItem("todo")) || [];
  todoList = todoList.map((task) => {
    if (task.id === id) {
      task.isCompleted = !task.isCompleted;
    }
    return task;
  });
  localStorage.setItem("todo", JSON.stringify(todoList));
  updateTodoList();
}

function updateTodoList() {
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";
  let todoList = JSON.parse(localStorage.getItem("todo")) || [];

  todoList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `
      <p>ID: ${task.id}</p>
      <p>Status: ${task.isCompleted ? "Completed" : "Incomplete"}</p>
      <p>Title: ${task.title}</p>
      <button onclick="deleteTask(${task.id})">Delete Task</button>
      <button onclick="updateTask(${task.id})">Mark as Completed</button>
    `;
    todoListContainer.appendChild(taskElement);
  });
}

window.onload = function () {
  const addTaskButton = document.getElementById("add-task");
  const inputBox = document.getElementById("input");

  addTaskButton.addEventListener("click", function () {
    const taskTitle = inputBox.value.trim();
    if (taskTitle !== "") {
      createTask(taskTitle);
      inputBox.value = "";
    }
  });

  updateTodoList();
};



// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    createTask,
    deleteTask,
    updateTask
  };
}
