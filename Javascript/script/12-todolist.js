const todoThings = [{ 
  name:'make dinner',
  dueDate:'2022-12-22'
},{
  name:'wash dishes',
  dueDate:'2022-12-22'
},];

renderTodoList();


document.querySelector('.add-todo-button')
.addEventListener('click',()=>{
  addToDo();
})



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
}



function renderTodoList(){  // 把addTodo()裡的Js code 變成html 

  let todoListHTML = '';

  todoThings.forEach(function (todoObject){  // function(value,index) -- it contains each value in the array

    const  { name, dueDate } = todoObject;
    const html = 
    `<div>${name}</div>
     <div>${dueDate}</div> 
     <button class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html; 
  })
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.delete-todo-button')  // selecting all buttons with `delete-todo-button`. A list of delete buttons
    .forEach((deleteButton, index)=>{               // loop thru the list of delete elements and give each element a addEventListner
      deleteButton.addEventListener('click',()=>{
        todoThings.splice(index, 1);
        renderTodoList();
      })
    })
  console.log(index);
}
