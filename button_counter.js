(function(){

var initialCount = 0;
var count_but = document.getElementById("count_but");

// Write an event listener (ONCLICK?) to handle the click of #count_but
	count_but.onclick = function(){
	//Increment the variable by 1 (use ++)
		initialCount++;
	//Connect it to the HTML (innerHTML thing)	
		counter.innerHTML = initialCount; 
	//console log
		console.log(initialCount);
	};


})();

