function Qlist(questions) {
  this.questions = questions;
  this.questionIndex = 0;
  this.score = 0;
}

Qlist.prototype.getCurrentQuestion = function() {
  return this.questions[this.questionIndex];
};

function populateIdWithHTML(id, text) {
  let element = document.getElementById(id);
  element.innerHTML = text;
}

Qlist.prototype.renderInElement = function(i) {
  let currentQuestion = this.questions[i];
  populateIdWithHTML('question', currentQuestion.question);
  populateIdWithHTML('progress', `Question ${this.questionIndex + 1} of ${this.questions.length}`);
  this.displayChoices();
};

Qlist.prototype.showResult = function(){
  populateIdWithHTML('quiz', `<h1>Awesome Quiz</h1>
    <h2 id="question" class="headline-secondary--grouped">Congratulation</h2>
    <p>You was right ${this.score} time(s).</p>`);
}

Qlist.prototype.checkResult = function(guess){
  if (this.getCurrentQuestion().isCorrectAnswer(guess)){
    this.score++;
  }
}

Qlist.prototype.next = function(guess) {
  this.checkResult(guess);
  this.questionIndex++;
  if(this.questionIndex < this.questions.length) {
    this.renderInElement(this.questionIndex);
  } else {
  this.showResult();
  }
};

Qlist.prototype.displayChoices = function() {
  var choices = this.getCurrentQuestion().choices;

  for(var i = 0; i < choices.length; i++) {
    populateIdWithHTML("choice" + i, choices[i]);
    this.guessHandler("guess" + i, choices[i]);
  }
}

Qlist.prototype.guessHandler = function(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    qList.next(guess);
  }
}
