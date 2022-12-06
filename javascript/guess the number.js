let x = Math.floor(Math.random() * 20 + 1),
  body = document.querySelector("body"),
  checkBtn = document.querySelector(".check"),
  againBtn = document.querySelector(".again"),
  helpBtn = document.querySelector(".help"),
  square = document.getElementById("square"),
  message = document.querySelector(".message"),
  score = Number(document.getElementById("score").textContent),
  scoreDisplay = document.getElementById("score"),
  highScore = document.getElementById("highscore"),
  title = document.getElementById("title"),
  container = document.querySelector(".instruction_container"),
  helpItems0 = document.querySelector(".instruction_element0"),
  helpItems1 = document.querySelector(".instruction_element1"),
  helpItems2 = document.querySelector(".instruction_element2"),
  helpItems3 = document.querySelector(".instruction_element3"),
  helpItems4 = document.querySelector(".instruction_element4"),
  instructionBtn = document.querySelector(".instruction_button"),
  arr = [];


//----------------------------------------------

console.log(x);

//-----------------------------------------------

function gameLost() {
    title.textContent = " Loser !!";
    square.textContent = x;
    message.textContent = " You Have Lost !!";
    body.style.backgroundColor = "red";
    checkBtn.style.display = "none";
}



function guess() {

  input = document.getElementById("user_input").valueAsNumber;

  if (input < x) {

    score = score - 1;
    scoreDisplay.textContent = score;

    if (input - x >= -2) {

      message.textContent = " Try a littel Higher"
    }

    else {

      message.textContent = " Your number is too Low "
    }
    
    if (score == 0) {
      gameLost();
    } 
    return score

  }

  else if (input > x) {

    score = score - 1;
    scoreDisplay.textContent = score;

    if (input - x <= 2) {

      message.textContent = " Try a littel lower"
    }

    else {
      message.textContent = " Your number is too high "
    }

    if (score == 0) {
      gameLost();
    } 

    return score

  }

  else if (input == x) {

    title.textContent = " You have won !";
    square.textContent = x;
    message.textContent = " You are correct !";
    body.style.backgroundColor = "Green";
    checkBtn.style.display = "none";

    let scoreM = localStorage.getItem('score')  //scoreM = score memory

    if (scoreM < score ) {
    localStorage.setItem('score', score)
    }
  }

  else {
    
    message.textContent = " Please enter a number ";
  }
}

function reload() {

  location.reload();
  localStorage.removeItem('score');
}

function help() {

  container.classList.remove("hidden");
  helpItems0.classList.remove("hidden");
  helpItems1.classList.remove("hidden");
  helpItems2.classList.remove("hidden");
  helpItems3.classList.remove("hidden");
  helpItems4.classList.remove("hidden");
  instructionBtn.classList.remove("hidden");

}

function unHide() {

  container.classList.add("hidden");
  helpItems0.classList.add("hidden");
  helpItems1.classList.add("hidden");
  helpItems2.classList.add("hidden");
  helpItems3.classList.add("hidden");
  helpItems4.classList.add("hidden");
  instructionBtn.classList.add("hidden");

}





//-------------------------------------------------

highScore.textContent = localStorage.getItem('score');

checkBtn.onclick = guess;
againBtn.onclick = reload;
helpBtn.onclick = help;
instructionBtn.onclick = unHide;





