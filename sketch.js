const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, gameState,engine, world,dusbin,paper1;

function setup() {
	createCanvas(1200, 800);
    //rectMode(center);

	gameState = "start";
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	dustbin1 = new Dustbin(1000, 710, 200, 20);
	dustbin2 = new Dustbin(880, 660, 20, 100);
	dustbin3 = new Dustbin(1110, 660, 20, 100);
	
	paper1 = new Paper(100, 50, 35);
	ground = Bodies.rectangle(width/2,height, width, 20,
		{
			isStatic: true
		})

	World.add(world, ground);
	
}

function keyPressed() {
	if(keyCode === UP_ARROW && gameState === "play") {

	   Matter.Body.applyForce(paper1.body, paper1.body.position,{
		   x:80,y:-80
		})
       
	}
}

function draw() {
if(gameState==="start") {
	background(255, 255, 0);
	textSize(20);
	fill("red");
	text("This small game will teach you to throw waste in dustbin", width/2, 200);
	if (keyCode === RIGHT_ARROW) {
		gameState = "play";
	}
}
if(gameState==="play") {
  rectMode(CENTER);
  background(255);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}
  drawSprites();
 
}

