console.log('Will Run as soon as the code is loaded')

// These are effectively global variables
let question = "awaiting click"
let expectedAnswer = 0;

function getRandomInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

function onClickAsk() {
  console.log('Ask')

  let divQuestion = document.getElementById('question')

  let a = getRandomInt(1, 20);
  let binary = (a).toString(2)

  expectedAnswer = a;
  question = `What is ${binary} in decimal?`

 
  divQuestion.innerHTML = question;
}


function onClickAnswer() {
  console.log('Answer')

  let playerAnswerRaw = document.forms['maths-quiz']['player-answer'].value;

  
  let playerAnswer = parseInt(playerAnswerRaw);

  
  if (playerAnswer === expectedAnswer) {
    alert('Correct!')
  } else {
    alert('Incorrect :(')
  }
}

function onClickTrash() {
  document.write('Contents of Page Replaced');
}