const toDoThings = [];
function addToDo (){
  const inputElement = document.querySelector('.input')
  const name = inputElement.value;
  toDoThings.push(name);

  console.log(toDoThings);

  inputElement.value= ''
}

