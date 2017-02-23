var count = 11;

var counter=setInterval(timer, 1000);

function timer(){
	count = count-1;
	console.log(count);
	if (count <= -1){
		clearInterval(counter);
		return;
		console.log(count);
	} else if (count == -1){
		$("timerSays").html("Time Out You Suck!");
	}
	$("#countDown").html(count);
	console.log(count);
	// if (count == ){
	// 	$("timerSays").html("Time Out You Suck!");
	// }
}

timer();
console.log(count)
