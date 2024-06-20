const todoThings = JSON.parse(localStorage.getItem('todolist')) || [{ 
  name:'make dinner',
  dueDate:'2022-12-22'
},{
  name:'wash dishes',
  dueDate:'2022-12-22'
},];

renderTodoList();

function addToDo (){
  const inputElement = document.querySelector('.input');
  const name = inputElement.value;

  const inputDateElement = document.querySelector('.date');
  const dueDate = inputDateElement.value;

  todoThings.push({
    //name:name,
    //dueDate:dueDate,
    name,
    dueDate,
  });

  inputElement.value= '';

  renderTodoList();

  saveToStorage();
}

function renderTodoList(){  //把addTodo()裡的Js code 變成html 
let todoListHTML = '';
  
  for (let i=0;i<todoThings.length;i++){
    const todoObject = todoThings[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    //const { name } = todoObject
    const  { name, dueDate } = todoObject
    const html = 
    `<div>${name}</div>
     <div>${dueDate}</div> 
     <button onclick="
        todoThings.splice(${i}, 1);
        renderTodoList();
      "class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
} 

function saveToStorage(){
  localStorage.setItem('todoThings',JSON.stringify(todoThings));
}