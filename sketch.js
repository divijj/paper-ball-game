var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Ball(100,50,25);
dustbinRight=new Dustbin(783,330,15,40);
dustbinLeft=new Dustbin(657,330,15,40,);
dustbinBottom=new Dustbin(720,350,100,15);
ground=new Ground(400,390,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 dustbinRight.display();
 dustbinLeft.display();
 dustbinBottom.display();
 ball.display();
 ground.display();
}
