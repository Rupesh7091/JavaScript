let todoList;

onLoad();

function onLoad() {
  let todoTask = localStorage.getItem('TodoList');
  todoList = todoTask ? JSON.parse(todoTask) : [];
  displayItems();
}

function addTodo() {
  let inputTodo = document.querySelector('#input-todo');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputTodo.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputTodo.value = '';
  dateElement.value = '';
  displayItems();

  localStorage.setItem('TodoList', JSON.stringify(todoList));
};

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for(let i = 0; i < todoList.length; i++) {

    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
      
    `;
  }

  containerElement.innerHTML = newHtml;
};