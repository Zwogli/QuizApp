function generateHtmlEndscreen(){
  document.getElementById('endscreen').style = '';
  document.getElementById('question-body').style = 'display : none';
  document.getElementById('amount-of-questions').innerHTML = questions.length;
  document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
  document.getElementById('header-img').classList.add('opacity');
  document.getElementById('header-img-result').classList.remove('d-none');
}

function generateHtmlProgressbar(){
  let percent  = (currentQuestion + 1) / questions.length;

  percent = Math.round(percent * 100);
  document.getElementById('progress-bar').innerHTML = `${percent} %`;
  document.getElementById('progress-bar').style.width = `${percent}%`;
}

function generateHtmlQuestion(){
  let question = questions[currentQuestion];
        
    document.getElementById('activ-question').innerHTML = currentQuestion + 1;
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function generateHtmlResetBgAnswer(){
  document.getElementById('answer_1').classList.remove("bg_answer_correct");
  document.getElementById('answer_1').classList.remove("bg_answer_false");
  document.getElementById('answer_2').classList.remove("bg_answer_correct");
  document.getElementById('answer_2').classList.remove("bg_answer_false");
  document.getElementById('answer_3').classList.remove("bg_answer_correct");
  document.getElementById('answer_3').classList.remove("bg_answer_false");
  document.getElementById('answer_4').classList.remove("bg_answer_correct");
  document.getElementById('answer_4').classList.remove("bg_answer_false");
}

function generateHtmlRestartGame(){
  document.getElementById('endscreen').style = 'display : none';
  document.getElementById('question-body').style = '';
  document.getElementById('header-img').classList.remove('opacity');
  document.getElementById('header-img-result').classList.add('d-none');
}