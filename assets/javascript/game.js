var count = 11;
var counter=setInterval(timer, 1000);
var index = 0;

var questionArray = [
{
	question:"What is the most visited National Park in the US? ",
	choices:["Acadia","Grand Canyon","Smoky Mountain","Yellow Stone"],
	correctChoice: 2
},{
	question:"Which of the following exists within the boundries of a national park?",
	choices:["The highest point in North America","The longest cave system in the world","The deepest lake in the world","All of the above"],
	correctChoice: 3
},{
	question:"Which national park has banned nearly all vehicles from its roads during peak season?",
	choices:["Joshua Tree","Olympic","Yosemite","Zion"],
	correctChoice: 3
},{
	question:"What is the newest national park?",
	choices:["Congaree","Big Bend","Mount Rainier","Great Sand Dunes"],
	correctChoice: 3
},{
	question:"Which of the following presidents more than doubled the acreage of the National Park System?",
	choices:["Calvin Coolidge","Richard Nixion","Jimmy Carter","George H. Bush"],
	correctChoice: 2
}
];

console.log(questionArray);
// console.log(questionArray[0].choices[0]);

function timer(){
	count--;
	if (count < 0){
		clearInterval(counter);
		return;
	} else if (count == 0){
		$("#timerSays").html("<h1>Time Out!</h1>");
	}
	$("#countDown").html("<h1>Time Left: " + count + "</h1");
}

function displayQuestions(){
	for(var i = 0; i < questionArray.length; i++){
		$("#questions").append("<h2>" + (i + 1) + ": " + questionArray[i].question + "</h2>");
		var rButtons = questionAnswer()
		$("#questions").append(rButtons);
		timer();
	}
}

function questionAnswer(){
	var answerList = $("<ul>");
	var item;
	var tag = '';
	// console.log(item);	
	for (var i = 0; i < questionArray.length; i++){
		var iChoice = questionArray[i];
		console.log(iChoice);
		for (var a = 0; a < questionArray[i].choices.length; a++){
			var xChoice = questionArray[i].choices[a];
			// console.log(xChoice)
			item = $("<li class='radio-inline'>");
			tag = '<input type ="radio" name = "answer" value ="' + a + '"/>';
			tag += xChoice;
			item.append(tag);
			answerList.append(item);
			}
	}
	return answerList;
}




window.onload = function(){
// timer();
displayQuestions();
};