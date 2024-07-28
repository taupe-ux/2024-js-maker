const listForm = document.querySelector("#list-form");
const listInput = document.querySelector("#list-form input");
const listUl = document.querySelector("#list-ul");

let liArray = [];

function listArray(newList) {
  localStorage.setItem("New Todo", JSON.stringify(liArray));
}

function deleteBtn(event) {
  const li = event.target.parentElement;
  li.remove();
  liArray = liArray.filter((toDo) => toDo.id !== parseInt(li.id));
  listArray();
}

function listAddList(newList) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(button);
  li.appendChild(span);
  listUl.appendChild(li);
  span.innerText = newList.text;
  li.id = newList.id;
  span.classList.add("spanfonst");
  li.classList.add("style-li");
  button.addEventListener("click", deleteBtn);
}

function listAddBtn(event) {
  event.preventDefault();
  const newList = listInput.value;
  listInput.value = "";
  const listObj = {
    text: newList,
    id: Date.now(),
  };
  listAddList(listObj);
  liArray.push(listObj);
  listArray(newList);
}

listForm.addEventListener("submit", listAddBtn);

const savedNewTodo = localStorage.getItem("New Todo");

console.log(savedNewTodo);

if (savedNewTodo !== null) {
  const parseNewTodo = JSON.parse(savedNewTodo);
  liArray = parseNewTodo;
  parseNewTodo.forEach(listAddList);
}
