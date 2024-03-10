// @ts-nocheck

const input = document.querySelector(".input input");
const addButton = document.querySelector(".input button");
const list = document.querySelector(".list");

const data = [];

function saveTodos() {
  const json = JSON.stringify(data);
  localStorage.setItem("data", json);
}

function removeTodo(id) {
  const index = data.findIndex((v) => v.id === id);
  if (index === -1) return;
  console.log(data);
  data.splice(index, 1);
  console.log(data);
  saveTodos();
}

function addTodo(value) {
  const todo = {
    id: data.length ? data[data.length - 1].id + 1 : 1,
    title: value,
  };

  data.push(todo);
  saveTodos();

  const addInput = document.createElement("input");
  addInput.setAttribute("type", "checkbox");
  addInput.addEventListener("click", () => {
    removeTodo(todo.id);
    document.querySelector('li[data-id="' + todo.id + '"]').remove();
  });

  const p = document.createElement("p");
  p.innerText = value;

  const li = document.createElement("li");
  li.append(addInput, " ", p);
  li.setAttribute("data-id", todo.id);

  list.append(li);
  input.value = "";
}

addButton.addEventListener("click", () => addTodo(input.value));

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo(e.target.value);
  }
});

const dataFromLS = localStorage.getItem("data");
if (dataFromLS) {
  const todos = JSON.parse(dataFromLS);
  for (const todo of todos) {
    addTodo(todo.title);
  }
}
