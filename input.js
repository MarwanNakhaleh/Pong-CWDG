//let's now receive input from the player
var keysDown = {};

window.addEventListener("keydown", function(event){
	keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event){
	delete keysDown[event.keyCode];
});

//allow the user's actions to move the paddle
var update = function(){
	player.update();
	ball.update(player.paddle, computer.paddle);
};
//write the player update function
Player.prototype.update = function(){
	for(var key in keysDown){
		var value = Number(key);
		if(value == 37){ //if left arrow
			this.paddle.move(-4, 0);
		}else if(value == 39){ //if right arrow
			this.paddle.move(4, 0);
		}else{
			this.paddle.move(0, 0);
		}
	}
};
//write the paddle move function
Paddle.prototype.move = function(x, y){
	this.x += x;
	this.y += y;
	this.x_speed = x;
	this.y_speed += y;
	if(this.x < 0){ //if the paddle hits the left wall
		this.x = 0;
		this.x_speed = 0;
	}else if(this.x + this.width > 400){ //if the paddle hits the right wall
		this.x = 400 - this.width;
		this.x_speed = 0;
	}
}