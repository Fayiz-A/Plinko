//name spacing for the modules of matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

//object variables
var ground1;

function setup() {
  createCanvas(510,810);

  //creating the engine and the world
  engine = Engine.create();
  world = engine.world;

  //creating the objects
  ground1 = new Ground(240, 790, 80, 20);
  division1 = new Division(190, 700);
  division2 = new Division(290, 700);

}

function draw() {
  clearBackground();

  Engine.update(engine);//updates the engine continuously

  rectMode(CENTER);//makes all the rectangles in relation to its center
  
  //displaying the objects
  ground1.display();
  division1.display();
  division2.display();
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
  rect(width/2, height/2, 510, 810);
  pop();
} 