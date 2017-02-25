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


function displayQuestion(){
	// debugger;
	for (var i = 0; i < questionArray.length; i++){
		console.log(i);
		$("#questions").append("<h2>" + questionArray[i].question + "</h2>");
		console.log(questionArray);

		for (var x = 0; x < questionArray[i].choices.length; x++){
			var tChoice = questionArray[i].choices[x];
			console.log(tChoice);
			$("#questions").append("<li class='radio-inline'>" + '<input type ="radio" name = "answer" value ="' + x + '"/>' + tChoice)
		}
	};		
};


window.onload = function(){
	displayQuestion();
}