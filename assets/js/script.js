let currentQuestion = 0;

const init = () =>{
  document.getElementById('max-question').innerHTML = questions.length;

  showQuestion();
}

const showQuestion = () =>{
  let question = questions[currentQuestion];

  document.getElementById('question_text').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}