let currentQuestion = 0,
    rightQuestions  = 0;

const init = () =>{
  document.getElementById('max-question').innerHTML = questions.length;

  showQuestion();
}

const showQuestion = () =>{

  if(currentQuestion >= questions.length){    //endscreen

    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = 'display : none';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-img').classList.add('opacity');
    document.getElementById('header-img-result').classList.remove('d-none');

  }else{    //show question
    let question = questions[currentQuestion],
        percent  = (currentQuestion + 1) / questions.length;

    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;

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

  if(selectedQuestionNumber == question['right_answer']){   //check correct answer
    document.getElementById(selection).classList.add("bg_answer_correct");
    rightQuestions++;
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

const restartGame = () =>{
  currentQuestion = 0;
  rightQuestions  = 0;
  document.getElementById('endscreen').style = 'display : none';
    document.getElementById('question-body').style = '';
  document.getElementById('header-img').classList.remove('opacity');
  document.getElementById('header-img-result').classList.add('d-none');

  init();
}