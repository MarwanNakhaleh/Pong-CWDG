//computer AI
var update = function(){
	player.update()
	computer.update(ball);
	ball.update(player.paddle, computer.paddle);
};

Computer.prototype.update = function(ball){
	var x_pos = ball.x;
	var diff = -((this.paddle.x + (this.paddle.width / 2)) - x_pos);
	if(diff < 0 && diff < -4){
		diff = -5;
	}else if(diff > 0 && diff > 4){
		diff = 5;
	}
	this.paddle.move(diff, 0);
	if(this.paddle.x < 0){
		this.paddle.x = 0;
	}else if(this.paddle.x + this.paddle.width > 400){
		this.paddle.x = 400 - this.paddle.width
	}
};