//bricks.js
var brick = {};
brick.brickWidth = 57; 
brick.brickHeight = 15;
brick.rows = 8; //rows of bricks 8
brick.cols = level.levelArray[level.currentLevel].length/8; //cols of bricks
brick.brickTracker = 0; //used in loop to work through the brickArray to see which bricks are still in play
brick.brickCount; //all bricks are in play at first
brick.alignLeft = 43;
brick.alignTop = 80;
brick.spacing = 0;
brick.lastHit = 0;
brick.color = ["purple","red", "yellow", "orange", "pink", "brown", "green","purple","red", "yellow", "orange", "pink", "brown", "green"];

console.log(level.levelArray[level.currentLevel]);

function drawBricks(){
	
	brick.brickCount = 0;
	//draw blocks and check for collisions//
	for(var i = 0; i < brick.cols; i++){
		for(var j = 0; j < brick.rows; j++){
			//draw each brick left
			var currBrick = level.levelArray[level.currentLevel][brick.brickTracker];
			if (currBrick >= 1){
				brick.brickCount ++;
				//ctx.strokeStyle = "white";
				ctx.fillStyle = brick.color[currBrick];
				//ctx.strokeRect((brick.brickWidth+brick.spacing)*j+brick.alignLeft,(brick.brickHeight+brick.spacing)*i+brick.alignTop,brick.brickWidth,brick.brickHeight);        
				ctx.fillRect((brick.brickWidth+brick.spacing)*j+brick.alignLeft,(brick.brickHeight+brick.spacing)*i+brick.alignTop,brick.brickWidth,brick.brickHeight);
				
				//look for collisions with remaining bricks - this calculation looks to see if the ball is in the same position in the stage as the bricks
				//brick has 4 collisions//
				
				var currBrickX = (brick.brickWidth+brick.spacing)*j+brick.alignLeft;
				var currBrickY = (brick.brickHeight+brick.spacing)*i+brick.alignTop;
				
				if(ball.ballX >= currBrickX-brick.spacing && ball.ballX <= currBrickX+brick.brickWidth+brick.spacing && ball.ballY >= currBrickY
				   && ball.ballY >= currBrickY-brick.spacing && ball.ballY <= currBrickY+brick.brickHeight+brick.spacing){ // block hit
					
      ball.speedY = -ball.speedY; //change dir on collision
      level.levelArray[level.currentLevel][brick.brickTracker] = 0;
      brick.bricksLeft--; //remove the brick
      brick.lastHit = currBrick;
				}
				
			}
			brick.brickTracker ++; //
		}
	}
	brick.brickTracker = 0;
}
