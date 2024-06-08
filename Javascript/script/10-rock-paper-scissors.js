  // Get the value in localStorage. JSON.parse() converts string in value
  let score = JSON.parse(localStorage.getItem('score')) || { 
    playerWin:0,
    computerWin:0,
    tie:0,
  }
      
  let choice='';
  
  function pickComputerMove(){
    let result='';
    let randomNumber = Math.random();
    if (randomNumber>=0 && randomNumber <=1/3){
      result='rock'
    }
    else if (randomNumber>1/3 && randomNumber<=2/3){
      result='paper'
    }
    else if (randomNumber >2/3 && randomNumber<=1){
      result='scissors'
    }
    return result;
    };

  function playGame(choice){ // determine the result if you win, lose or tie. then localStorage.setItem()
    const result = pickComputerMove(); // get the return value from pickComputerMove().
    if (choice ==='rock'){
      if (choice===result){
       finResult = 'Tie';
      }
      else if (result==='paper'){
       finResult = 'You lose';
      }
      else if (result==='scissors'){
       finResult = 'You win';
       
      }
    }
    else if (choice ==='scissors'){
      if (choice===result){
        finResult = 'Tie';
      }
      else if (result==='rock'){
        finResult = 'You lose';
      }
      else if (result==='paper'){
        finResult = 'You win'
      }
    }
    
    else if (choice ==='paper'){
      if (choice===result){
       finResult = 'Tie';
      }
      else if (result==='scissors'){
       finResult = 'You lose';
      }
      else if (result==='rock'){
       finResult = 'You win';
      }
    }      
    if (finResult === 'You win') {
        score.playerWin += 1;
      } 
    else if (finResult === 'You lose') {
        score.computerWin += 1;
      }
    else if (finResult === 'Tie'){
        score.tie +=1;
    }

    localStorage.setItem('score', JSON.stringify(score)); //It can only put string in localStorage, so convert the value in string using JSON.stringify().

    document.querySelector('.gameResult').innerHTML = (`You
    <img src="img/${choice}-Emoji.png" class="move-icon">
    <img src="img/${result}-Emoji.png" class="move-icon">
    Computer
    <p>
    Win: ${score.playerWin} Lose: ${score.computerWin} Tie:${score.tie}`);
  }

  function resetText(){
    document.querySelector('.gameResult').innerHTML = (`Win: ${score.playerWin} Lose: ${score.computerWin} Tie:${score.tie}`)
   };

