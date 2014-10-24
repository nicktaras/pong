//ball.js
var ball = {};
ball.ballWidth = 10;
ball.ballHeight = 10;
ball.ballX = 70; //init x position of pong ball
ball.ballY = 200; //init y position of pong ball
ball.speedX = 4; //speed x
ball.speedY = 4; //speed y
ball.defaultSpeed = 6; //speed y

function drawBall(){
	//draw pong ball
	ctx.fillStyle = "white";
	ctx.lineWidth = 0;
    ctx.strokeStyle = "black";
	ctx.strokeRect(ball.ballX,ball.ballY,ball.ballWidth,ball.ballHeight);
	ctx.fillRect(ball.ballX,ball.ballY,ball.ballWidth,ball.ballHeight);	
}