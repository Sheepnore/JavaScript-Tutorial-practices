const toDoThings = ['make dinner','wash dishes'];

renderTodoList();

function addToDo (){
  const inputElement = document.querySelector('.input')
  const name = inputElement.value;
  toDoThings.push(name);

  console.log(toDoThings);

  inputElement.value= '';

  renderTodoList();
}

function renderTodoList(){
let todoListHTML = '';
  
  for (let i=0;i<toDoThings.length;i++){
    let todo = toDoThings[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
} 
