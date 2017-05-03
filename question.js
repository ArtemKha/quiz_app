function Question(question, choices, rightChoice) {
  this.question = question;
  this.choices = choices;
  this.rightChoice = rightChoice;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return choice == this.rightChoice;
}
