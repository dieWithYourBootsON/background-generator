var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function r() {
	var r = ("0" + Math.floor(Math.random() * 256|0).toString(16)).substr(-2);
	console.log(r);
	return r;
}

function randomColorGenerator() {
	var color = "#";
	color += r() + r() + r();
	return color;
}

random.addEventListener("click", function(){
	color1.value = randomColorGenerator();
	color2.value = randomColorGenerator();
	setGradient();
})