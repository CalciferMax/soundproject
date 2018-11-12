var blocks = [];

function preload() {
	soundFormats('mp3')
	mySound = loadSound('1.mp3')
	}



function setup() {
	createCanvas(400, 400);
	var block = {
			x: 200,
			y: 300,
		  r:0,
			dx:random(-1, 1),
		  dy:random(0, 1)
	};
	blocks.push(block);
}

function draw() {
	background(0);
	noStroke();
	// draw smokestack
	fill(255);
	rect(195, height, 30, -100);


	for (var i = 0; i < blocks.length; i++) {
		var block = blocks[i];
		push();
		fill(255);
		translate(block.x, block.y);
		rotate(blocks.r);
		rect(-5, -5, 10, 10);
		pop();

		//change x and y
		block.x -= block.dx*3;
		block.y -= block.dy*3;

		// rotate 0.05 radians ~= 2.8 degrees per frame
		block.r += 0.05

		// if reach the boundary
		if (block.y < 0 || block.y > 400) {
			block.dy = -block.dy
		} else if (block.x < 0 || block.x > 400) {
			block.dx = -block.dx
		}


	}




}



function mouseClicked() {
	var block = {
			x: 200,
			y: 300,
		  r:0,
			dx:random(-1, 1),
		  dy:random(0, 1)
	};
	blocks.push(block);

		mySound.play();
}
