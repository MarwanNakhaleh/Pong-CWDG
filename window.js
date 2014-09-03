//create a window compatible with Firefox, IE 6+, and Chrome, and set it to refresh 60 times per second
var animate = window.RequestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)};
//create canvas
var canvas = document.createElement('canvas');
//set canvas width and height
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
//create score for each player
var score_player = 0;
var score_computer = 0;
//attach the canvas to the screen and show it when the page loads
window.onload = function(){
	//add the canvas to the HTML file
	document.body.appendChild(canvas);
	canvas.style.border = "#333333 2px solid";
	document.getElementById("ps").innerHTML = score_player;
	document.getElementById("cs").innerHTML = score_computer;
	//refresh the canvas every 1/60 seconds
	animate(step);
};
//step update objects, render objects, and request itself
var step = function(){
	update();
	render();
	animate(step);
};
var update = function(){

};
var render = function(){
	context.fillStyle = "#EFEFEF";
	context.fillRect(0,0,width,height);
};