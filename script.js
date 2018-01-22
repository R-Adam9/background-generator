var cLeft=document.getElementById("color1");
var cRight=document.getElementById("color2");
var body=document.getElementById("body1");
var h3=document.querySelector("h3");
var colorGradient;


function changeColor(){

	colorGradient="linear-gradient(to right, "+cLeft.value +", " + cRight.value + ")" ;

body.style.background=colorGradient;
h3.textContent=colorGradient;

}

cLeft.addEventListener("input", function(){

changeColor();


})

cRight.addEventListener("input", function(){

changeColor();

})