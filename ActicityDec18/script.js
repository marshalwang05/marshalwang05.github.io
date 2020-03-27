var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var color7 = document.querySelector(".color7");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+color1.value
	+ ", "
	+color2.value
	+ ", "
	+color3.value
	+ ", "
	+color4.value
	+ ", "
	+color5.value
	+ ", "
	+color6.value
	+ ", "
	+ color7.value
	+ ")"


	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

color4.addEventListener("input", setGradient);

color5.addEventListener("input", setGradient);

color6.addEventListener("input", setGradient);

color7.addEventListener("input", setGradient);