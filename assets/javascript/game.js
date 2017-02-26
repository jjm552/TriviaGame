var count = 121;
var counter=setInterval(timer, 1000);
var index = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

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
	}else if (count == 0){
		$("#timerSays").html("<h1>Time's Up!</h1>");
		for (var i = 0; i < questionArray.length; i++){
		var userChoice =  $('input:radio[name=answer' + i + ']:checked').val();
		console.log(userChoice);
		if (userChoice == "undefined"){
			unanswered++;
		}
		else if (userChoice != questionArray[i].correctChoice){
			incorrect++;
		}
		else{
			correct++;
		}
	}
		$("#timerDiv").hide('slow');
		$("#questionsDiv").hide('slow');
		$("#submit-quiz").hide('slow');
		$("#summary").html("<h2>Correct answers: " + correct + "</h2>");
		$("#summary").append("<h2>Incorrect answers: " + incorrect + "</h2>");
		$("#summary").append("<h2>Unanswered Questions: " + unanswered + "</h2>");
	};
	$("#countDown").html("<h1>Time Left: " + count + "</h1");
};



function displayQuestion(){
	// debugger;
	for (var i = 0; i < questionArray.length; i++){
		console.log(i);
		$("#questions").append("<h2>" + questionArray[i].question + "</h2>");
		console.log(questionArray);

		for (var x = 0; x < questionArray[i].choices.length; x++){
			var tChoice = questionArray[i].choices[x];
			console.log(tChoice);
			$("#questions").append("<ul>"+"<li class='radio-inline'>" + '<input type ="radio" name = "answer' + i + '" value ="' + x + '"/>' + tChoice +"</ul>")
		}
	}
};

$("#submit-quiz").on("click", function(event){
	event.preventDefault();
	
	for (var i = 0; i < questionArray.length; i++){
		var userChoice =  $('input:radio[name=answer' + i + ']:checked').val();
		console.log(userChoice);
		if (userChoice == "undefined"){
			unanswered++;
		}
		else if (userChoice != questionArray[i].correctChoice){
			incorrect++;
		}
		else{
			correct++;
		}
	}
	console.log(correct);
	console.log(incorrect);
	console.log(unanswered);



	$("#timerDiv").hide('slow');
	$("#questionsDiv").hide('slow');
	$("#submit-quiz").hide('slow');
	$("#summary").html("<h2>Correct answers: " + correct + "</h2>");
	$("#summary").append("<h2>Incorrect answers: " + incorrect + "</h2>");
	$("#summary").append("<h2>Unanswered Questions: " + unanswered + "</h2>");



})

window.onload = function(){
timer();
displayQuestion();
};