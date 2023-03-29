let currentQuestion = 0;

const init = () =>{
  document.getElementById('max-question').innerHTML = questions.length;

  showQuestion();
}

const showQuestion = () =>{

  if(currentQuestion >= questions.length){

    //todo show endscreen
    
  }else{
    let question = questions[currentQuestion];
  
    document.getElementById('activ-question').innerHTML = currentQuestion + 1;
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
  }
}

const answer = (selection) =>{
  let question = questions[currentQuestion],
      selectedQuestionNumber = selection.slice(-1),
      idOfRightAnswer = `answer_${question['right_answer']}`;

  if(selectedQuestionNumber == question['right_answer']){
    document.getElementById(selection).classList.add("bg_answer_correct");
  }else{
    document.getElementById(selection).classList.add("bg_answer_false");
    document.getElementById(idOfRightAnswer).classList.add("bg_answer_correct");
  }
  document.getElementById('next-btn').disabled = false;
}

const nextQuestion = () => {
  currentQuestion++;  //increas from 0 to 1
  document.getElementById('next-btn').disabled = true;
  resetAnswerButtons();
  showQuestion();
  // document.getElementById(idOfRightAnswer).classList.remove("bg_answer_correct");
}

const resetAnswerButtons = () => {
  document.getElementById('answer_1').classList.remove("bg_answer_correct");
  document.getElementById('answer_1').classList.remove("bg_answer_false");

  document.getElementById('answer_2').classList.remove("bg_answer_correct");
  document.getElementById('answer_2').classList.remove("bg_answer_false");

  document.getElementById('answer_3').classList.remove("bg_answer_correct");
  document.getElementById('answer_3').classList.remove("bg_answer_false");

  document.getElementById('answer_4').classList.remove("bg_answer_correct");
  document.getElementById('answer_4').classList.remove("bg_answer_false");
}