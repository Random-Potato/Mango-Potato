
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var petRock; //shorter version of: petRockThatLikesToEatMangoesButDoesntKnowHow
var mannyTheMango, minnyTheMango, mickeyTheMango, maggyTheMango, carl;
var elastic;
var boy, boyImage, tree, treeImage;
var ground;

function preload(){
	boyImage = loadImage("Plucking mangoes/boy.png");
	treeImage = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	petRock = new Rock(150,550,100,100,PI/2);
	World.add(world, petRock);

	boy = createSprite(200,600);
	boy.addImage(boyImage);
	boy.scale = 0.1;
	tree = createSprite(600,500);
	tree.addImage(treeImage);
	tree.scale = 0.3;

	elastic = new slingshot(petRock.body, {x:150,y:550});

	mannyTheMango = new Mango(600,400,45,50,PI/2);
	minnyTheMango = new Mango(650,380,45,50,PI/2);
	mickyTheMango = new Mango(610,410,45,50,PI/2);
	maggyTheMango = new Mango(560,470,45,50,PI/2);
	carl = new Mango(620,500,45,50,PI/2);

    ground = new Ground(400,695,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  

  drawSprites();
  mannyTheMango.display();
  minnyTheMango.display();
  mickyTheMango.display();
  maggyTheMango.display();
  carl.display();
  petRock.display();
  elastic.display();
  ground.display();

  detectCollision(petRock, carl);
  detectCollision(petRock, mannyTheMango);
  detectCollision(petRock, minnyTheMango);
  detectCollision(petRock, maggyTheMango);
  detectCollision(petRock, mickeyTheMango);
}



function mouseDragged(){
    Matter.Body.setPosition(petRock.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    elastic.fly();
}

function keyPressed(){
    if(keyCode===32){
        elastic.attach(petRock.body);
	}
}

function detectCollision(stone, mango){
 	mangoPos = mango.body.position;
	stonePos = stone.body.position;
	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if(distance<=stone.r, mango.r){
		Matter.Body.setStatic(mango.body,false);
	}
}