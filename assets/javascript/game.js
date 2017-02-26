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
},{
	question:"What is the smalles national park?",
	choices:["Dry Tortugas","Hot Springs","Petrified Forest","Black Canyon Gunnison"],
	correctChoice: 1
},{
	question:"What is the emblem of the National Park Service?",
	choices:["Arrowhead","Diamond","Log cabin","Redwood tree"],
	correctChoice: 0
}
];

function clearTimer(){
	count = 121;
	counter = setInterval(timer, 1000);
	$("#timerSays").html("");
}

function timer(){
	count--;
	if (count < 0){
		clearInterval(counter);
		return;
	}
	else if (count == 0){
		$("#timerSays").html("<h1>Time's Up!</h1>");
			for (var i = 0; i < questionArray.length; i++){
				var userChoice =  $('input:radio[name=answer' + i + ']:checked').val();
				if (userChoice == undefined){
					unanswered++;
				}
				else if (userChoice != questionArray[i].correctChoice){
					incorrect++;
				}
				else{
					correct++;
				}
			}
		endGame();
	};
	$("#countDown").html("<h1>Time Left: " + count + "</h1");
	console.log(correct);
	console.log(incorrect);
};

function displayQuestion(){
	for (var i = 0; i < questionArray.length; i++){
	$("#questions").append("<h2>" + questionArray[i].question + "</h2>");
		for (var x = 0; x < questionArray[i].choices.length; x++){
			var tChoice = questionArray[i].choices[x];
			$("#questions").append("<ul>"+"<li class='radio-inline'>" + '<input type ="radio" name = "answer' + i + '" value ="' + x + '"/>' + tChoice +"</ul>")
		}
	}
	$("#submit-quiz").on("click", function(event){
		event.preventDefault();
		clearInterval(counter);
		for (var i = 0; i < questionArray.length; i++){
			var userChoice =  $('input:radio[name=answer' + i + ']:checked').val();
			if (userChoice == undefined){
				unanswered++;
			}
			else if (userChoice != questionArray[i].correctChoice){
				incorrect++;
			}
			else{
				correct++;
			}
		}
		endGame();	
	});
};

function endGame(){
	$("#timerDiv").hide('slow');
	$("#questionsDiv").hide('slow');
	$("#questions").html("")
	$("#submit-quiz").hide('slow');
	$("#summary").show();
	$("#summary").html("<h2>Correct answers: " + correct + "</h2>");
	$("#summary").append("<h2>Incorrect answers: " + incorrect + "</h2>");
	$("#summary").append("<h2>Unanswered Questions: " + unanswered + "</h2>")	
	restartButton();
}

function restartButton(){
	var restart = $("<input class='btn btn-primary btn-block' type='button' id='restart' value='Play Again' />");
	restart.appendTo($("#summary"));
	$("#restart").on("click", function(event){
		event.preventDefault();	
		$("#summary").hide();
		$("#timerDiv").show();
		$("#questionsDiv").show();
		$("#submit-quiz").show();
		clearTimer();
		displayQuestion();
		timer();
	});
	correct = 0;
	incorrect = 0;
	unanswered = 0;
};

window.onload = function(){
timer();
displayQuestion();
};