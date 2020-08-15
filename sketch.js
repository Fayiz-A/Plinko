//name spacing for the modules of matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

function setup() {
  createCanvas(540,810);

  //creating the engine and the world
  engine = Engine.create();
  world = engine.world;

  //arrays for storing the objects
  groundArray = [];
  divisionArray = [];

  //cooridnates of the grounds for using them in a loop.
  //gnd means a ground
  gndCorX = 70;//the starting x coordinate

  //cooridnates of the grounds for using them in a loop.
  //div means a division
  divCorX = 20;//the starting x coordinate

  //creating the objects
  for(var i = 0; i < 5; i++) {
    //creating all the grounds
    groundArray.push(new Ground(gndCorX, 790, 80, 20));
    gndCorX += 100;//this changes the x coordinate of the ground. 
    //100 = 40+20+40 = halfGroundWidth + division's Width + halfGroundWidth
  }

  for(i = 0; i < 6; i++) {
    //creating all the divisions
    divisionArray.push(new Division(divCorX, 700));
    divCorX += 100;//this changes the x coordinate of the divisions. 
    //100 = 10+80+10 = halfDivisionWidth + ground's Width + halfdivisionWidth
  }

  peg = new Peg(200, 200, 10);
  particle = new Particle(150, 100, 10, [random(0, 255), random(0, 255), random(0, 255)]);

}

function draw() {
  clearBackground();

  Engine.update(engine);//updates the engine continuously

  rectMode(CENTER);//makes all the rectangles in relation to its center
  
  //displaying the objects
  groundArray.forEach((item, index) => item.display());
  divisionArray.forEach((item, index) => item.display());

  peg.display();
  particle.display();

}

function clearBackground(){
  //this function clears the background
  //this is an alternative to background() function;
  //I did this so that we have a brown border around the background
  push();
  rectMode(CENTER);
  stroke("brown");
  strokeWeight(20);
  fill("black");
  rect(width/2, height/2, 540, 810);
  pop();
} 