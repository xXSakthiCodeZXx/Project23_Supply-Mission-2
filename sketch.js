var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;
var rec1,rec2,rec3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var matter;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	rec1 = createSprite(300,550,20,100);
	rec1.shapeColor = "red";

	rec2 = createSprite(500,550,20,100);
	rec2.shapeColor = "red";

	rec3 = createSprite(400,600,200,20);
	rec3.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	rect1 = new Box(300,550,20,100);
	rect2 = new Box(500,550,20,100);
	rect3 = new Box(400,600,200,20);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  rect1.display();
  rect2.display();
  rect3.display();

  keyPressed();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody, false);

  }
}



