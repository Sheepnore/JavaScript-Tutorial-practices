let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

displayCalc();

function updateCalculation(value){
  calculation += value;
  localStorage.setItem('calculation',JSON.stringify(calculation));
  displayCalc()
}
function displayCalc(){
  displayNum = document.querySelector('.result')
  displayNum.innerHTML = calculation;
}

function changeButtonColor(buttonNumber){
  document.getElementById(buttonNumber).style.backgroundColor = 'red';
}


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = 'red';
  });
  button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '';
  });
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '';
  });
});