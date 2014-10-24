//Walls.js
var walls = {};
walls.wallHeight = 420;
walls.wallWidth = 20;
walls.wallLeftX = window.parent.walls.wallWidth;
walls.wallRightX = window.parent.stage.stageWidth - window.parent.walls.wallWidth*2 -1;
walls.wallY = window.parent.walls.wallWidth;
walls.wallTopY = window.parent.walls.wallWidth;  
walls.topWallHeight = 500;
walls.topWallWidth = window.parent.walls.wallWidth;

function drawWalls(){

	//draw wall left
	ctx.fillStyle = "#fff";
	ctx.fillRect(walls.wallLeftX,walls.wallY,walls.wallWidth,walls.wallHeight);
	
	//draw wall right
	ctx.fillStyle = "#fff";
	ctx.fillRect(walls.wallRightX,walls.wallY,walls.wallWidth,walls.wallHeight);
	
	//draw wall top
	ctx.fillStyle = "#fff";
	ctx.fillRect(walls.wallLeftX,walls.wallTopY,walls.topWallHeight,walls.topWallWidth);
		
}