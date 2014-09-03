//player paddle
function Paddle(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.x_speed = 0;
	this.y_speed = 0;
}

//render the paddle itself;
Paddle.prototype.render = function(){
	context.fillStyle = "#333333";
	context.fillRect(this.x, this.y, this.width, this.height);
};

//paddles for player and computer
function Player(){
	this.paddle = new Paddle(175, 580, 50, 10);
}
function Computer(){
	this.paddle = new Paddle(175, 10, 50, 10);
}

//actually render the two paddles to the screen
Player.prototype.render = function(){
	this.paddle.render();
};
Computer.prototype.render = function(){
	this.paddle.render();
};

//create the ball
function Ball(x, y){
	this.x = x;
	this.y = y;
	this.x_speed = 0;
	this.y_speed = 3;
	this.radius = 5;
}
//set the ball in motion upon rendering
Ball.prototype.render = function(){
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
	context.fillStyle = "#333333";
	context.fill();
};

//build the objects
var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

//render everything
var render = function(){
	context.fillStyle = "#EFEFEF";
	context.fillRect(0,0,width,height);
	player.render();
	computer.render();
	ball.render();
};

//update the ball on each frame
var update = function(){
	ball.update();
};
//what exactly changes when the ball is updated?
Ball.prototype.update = function(){
	this.x += this.x_speed;
	this.y += this.y_speed;
};