var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(170, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	packageSprite2=createSprite(470, 80, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2;
	//packageSprite2.visible=false;

	packageSprite3=createSprite(770, 80, 10,10);
	packageSprite3.addImage(packageIMG)
	packageSprite3.scale=0.2;
	//packageSprite3.visible=false;

	helicopterSprite=createSprite(170, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	helicopterSprite2=createSprite(470,200, 10,10);
	helicopterSprite2.addImage(helicopterIMG)
	helicopterSprite2.scale=0.6;

	helicopterSprite3=createSprite(770,200, 10,10);
	helicopterSprite3.addImage(helicopterIMG)
	helicopterSprite3.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(170 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	packageBody2 = Bodies.circle(470 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody2);

	packageBody3 = Bodies.circle(770 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody3);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 

  packageSprite3.x= packageBody3.position.x 
  packageSprite3.y= packageBody3.position.y 

  drawSprites();
  keyPressed();
  keyPressed2();
  keyPressed3();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false); 
    
  }
}

function keyPressed2() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(packageBody2, false); 
	   
	 }
   }

   function keyPressed3() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(packageBody3, false); 
	   
	 }
   }



