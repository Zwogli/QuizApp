let currentQuestion = 0,
    rightQuestions  = 0,
    AUDIO_SUCCESS = new Audio('assets/audio/right.mp3'),
    AUDIO_FAIL = new Audio('assets/audio/wrong.mp3');

const init = () =>{
  document.getElementById('max-question').innerHTML = questions.length;

  showQuestion();
}

const showQuestion = () =>{
  if(gameIsOver()){     //endscreen
    generateHtmlEndscreen();
    generateHtmlProgressbar();
  }else{                                      //show question
    generateHtmlProgressbar();
    generateHtmlQuestion();
  }
}

const gameIsOver = () =>{
  return currentQuestion >= questions.length;
}

const answer = (selection) =>{
  let question = questions[currentQuestion],
      selectedQuestionNumber = selection.slice(-1),
      idOfRightAnswer = `answer_${question['right_answer']}`;

  if(rightAnswerSelected(selectedQuestionNumber, question)){   //check correct answer
    feedbackCorrectAnswer(selection);
    incrementQuestion();
  }else{
    feedbackFalseAnswer(selection, idOfRightAnswer);
  }
  disableAllInputs();
  document.getElementById('next-btn').disabled = false;
}

const rightAnswerSelected = (selectedQuestionNumber, question) =>{
  return selectedQuestionNumber == question['right_answer'];
}

const feedbackCorrectAnswer = (selection) =>{
  document.getElementById(selection).classList.add("bg_answer_correct");
  AUDIO_SUCCESS.play();
}

const incrementQuestion = () =>{
  rightQuestions++;
}

const feedbackFalseAnswer = (selection, idOfRightAnswer) =>{
  document.getElementById(selection).classList.add("bg_answer_false");
  document.getElementById(idOfRightAnswer).classList.add("bg_answer_correct");
  AUDIO_FAIL.play();
}

function disableAllInputs(){
  document.getElementById('answer_1').disabled = true;
  document.getElementById('answer_2').disabled = true;
  document.getElementById('answer_3').disabled = true;
  document.getElementById('answer_4').disabled = true;
}

const nextQuestion = () => {
  currentQuestion++;  //increas from 0 to 1
  document.getElementById('next-btn').disabled = true;
  resetAnswerButtons();
  showQuestion();

}

const resetAnswerButtons = () => {
  generateHtmlResetBgAnswer();
  enableAllInputs();
}

function enableAllInputs(){
  document.getElementById('answer_1').disabled = false;
  document.getElementById('answer_2').disabled = false;
  document.getElementById('answer_3').disabled = false;
  document.getElementById('answer_4').disabled = false;
}

const restartGame = () =>{
  currentQuestion = 0;
  rightQuestions  = 0;
  generateHtmlRestartGame();
  init();
}