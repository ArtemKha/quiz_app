let qList = new Qlist([
	new Question("What is the answer to the Ultimate Question of Life?",["Pi", "42"], "42"),
	new Question("Who was the first President of the United States?", ["George Washington", "Thomas Jefferson"], "George Washington"),
	new Question("What's the Best Programming Language?", ["JavaScript", "Java"], "JavaScript")
]);

qList.renderInElement(0);
