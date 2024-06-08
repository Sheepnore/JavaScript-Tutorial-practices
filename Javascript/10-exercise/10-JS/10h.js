function handleCostKeydown(event){
  if (event.key==='Enter'){
  Calculate();
  }
}
function Sub(){
  const buttonElement = document.querySelector('.subscribe-button');
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
    buttonElement.classList.add('is-subscribe');
  }
  else{
    buttonElement.innerText = 'Subscribe';
    buttonElement.classList.remove('is-subscribe');
  }
 }

function Calculate(){
  const inputElement = document.querySelector('.calculate');
  let cost = Number(inputElement.value);
  const PElement = document.querySelector('.shippingResult');
  
  if (cost <0){
    PElement.classList.add('error-warning');
    PElement.innerText = 'Error: cost cannot be less than $0'

  } else if (cost >=40){
    PElement.classList.remove('error-warning');
    PElement.innerText= `${cost}`;
  }
  else{
    cost += 10;
    PElement.classList.remove('error-warning');
    PElement.innerText = `${cost}`;
  };
}