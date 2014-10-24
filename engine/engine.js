function checkGameOver(){
	//game ends when there are no blocks left
	if(brick.brickCount == 0){
		//clearInterval(timer);
		level.levelUp();
	}
}

function checkPaddleCollision(){
	
	if (ball.ballY + ball.ballHeight >= paddle.paddlePosY && ball.ballY + ball.ballHeight <= paddle.paddlePosY + paddle.paddleHeight && ball.ballX >= paddle.paddlePosX && ball.ballX <= paddle.paddlePosX + paddle.paddleWidth) { // center of the paddle
		ball.speedY = -ball.speedY;
    }
	
}

function changeBallSpee() {
 
}

function checkWallCollisions(){
	
	//collision with walls
 if (ball.ballX <= walls.wallLeftX + walls.wallWidth || ball.ballX > walls.wallRightX - ball.ballWidth) { //left and right
       ball.speedX = -ball.speedX;
 } 
	if (ball.ballY <= walls.wallTopY*2){ // top
		ball.speedY = -ball.speedY;
	} else if (ball.ballY > stage.stageHeight - ball.ballWidth) { // bottom
		ball.speedY = -ball.speedY;
		//console.log("game over");
		//clearInterval(timer);
    }
	
}

function levelUp(args) {
 //code
}