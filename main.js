function divide(num1) {
	return num1 / 10;
}

function multiply(num1) {
	return num1 * 5;
}

function inputnull() {
	var input = document.getElementById("userinput").value;
	var display = document.getElementById("answer")
	if (input === "") {
		alert("Please give me a number!");
	} else if (input > 10000) {
		display.innerHTML = "<h1>" +  "Your number divided by 10 is " + divide(input) + "</h1>";
	} else if (input < 10000) {
		display.innerHTML = "<h1>" + "Your number multiplied by 5 is " + multiply(input) + "</h1>";
	}
}

function resetFunc() {
	var userfield = document.getElementById("userinput");
	var display = document.getElementById("answer");
	userfield.value = "";
	display.innerHTML = "<div></div>";
}

var button = document.getElementById("button");
button.addEventListener('click', inputnull);

var reset = document.getElementById("reset");
reset.addEventListener('click', resetFunc);
