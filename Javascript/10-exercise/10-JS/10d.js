function toggled(classSelector){

  const button = document.querySelector(classSelector);

  if (button.classList.contains('is-toggled') == false){
    unToggled();
    
    button.classList.add('is-toggled');
  }
  else{
    button.classList.remove('is-toggled');
  }
}

function unToggled(){
  const turnOff = document.querySelector('.is-toggled');
  if (turnOff){
    turnOff.classList.remove('is-toggled');
  }
}