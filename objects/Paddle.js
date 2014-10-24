//paddle.js
var paddle = {};
paddle.paddleWidth = 70; //width of paddle init value
paddle.paddleHeight = 10; //
paddle.paddleSpeed = 10; //
paddle.paddlePosX = 200; // paddle x position
paddle.paddlePosY = 440; // paddle x position
//we use this formula to split the paddle into 3 parts, left right and center to change the angles each hit = paddleWidth / 3 - ball.ballWidth;
paddle.paddleMath = window.parent.paddle.paddleWidth / 3 - window.parent.ball.ballWidth;

function drawPaddle(){
	ctx.fillStyle = "white";
	ctx.lineWidth = 0;
    ctx.strokeStyle = "green";
	ctx.strokeRect(paddle.paddlePosX,paddle.paddlePosY,paddle.paddleWidth,paddle.paddleHeight);
	ctx.fillRect(paddle.paddlePosX,paddle.paddlePosY,paddle.paddleWidth,paddle.paddleHeight);	
}