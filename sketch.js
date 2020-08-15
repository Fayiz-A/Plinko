//name spacing for the modules of matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

//array for storing the objects
var particleArray = [];

function setup() {
  createCanvas(540, 810);

  //creating the engine and the world
  engine = Engine.create();
  world = engine.world;

  //arrays for storing the objects
  borderArray = [];
  groundArray = [];
  divisionArray = [];

  //array for the positions and the dimesions of the borders
  borderPosArray = [[width - 10, height/2, 20, height], [10, height/2, 20, height], [width/2, height-10, width, 20]];
  
  //borders
  for(var i = 0; i<borderPosArray.length; i++) {
    borderArray.push(new Border(borderPosArray[i][0], borderPosArray[i][1], borderPosArray[i][2], borderPosArray[i][3]));
  }

  //cooridnates of the grounds for using them in a loop.
  //gnd means a ground
  gndCorX = 70;//the starting x coordinate

  //creating the objects
  for (var i = 0; i < 5; i++) {
    //creating all the grounds
    groundArray.push(new Ground(gndCorX, 790, 80, 20));
    gndCorX += 100;//this changes the x coordinate of the ground. 
    //100 = 40+20+40 = halfGroundWidth + division's Width + halfGroundWidth
  }

  //cooridnates of the divisions for using them in a loop.
  //div means a division
  divCorX = 20;//the starting x coordinate

  for (i = 0; i < 6; i++) {
    //creating all the divisions
    divisionArray.push(new Division(divCorX, 700));
    divCorX += 100;//this changes the x coordinate of the divisions. 
    //100 = 10+80+10 = halfDivisionWidth + ground's Width + halfdivisionWidth
  }

  drawPegs();
}

function draw() {
  clearBackground();

  Engine.update(engine);//updates the engine continuously

  rectMode(CENTER);//makes all the rectangles in relation to its center
  
  //displaying the objects
  borderArray.forEach((item, index) => item.display());
  groundArray.forEach((item, index) => item.display());
  divisionArray.forEach((item, index) => item.display());

  pegArray.forEach((item, index) => item.display());

  if (frameCount % 60 == 0) {
    //draws a particle after every 60 frames
    drawParticle();
  }

  particleArray.forEach((item, index) => item.display());
}

function clearBackground() {
  //this function clears the background
  //this is an alternative to background() function;
  //I did this so that we have a brown border around the background
  push();
  rectMode(CENTER);
  stroke("brown");
  strokeWeight(20);
  fill("black");
  rect(width / 2, height / 2, 540, 810);
  pop();
}

function drawPegs() {
  //array for storing the objects
  pegArray = [];

  //cooridnates of the pegs for using them in a loop.
  pegCorX = 50;//the starting x coordinate
  pegCorY = 50;//the starting y coordinate

  pegNumber = 8;//this will determine the number of pegs in a row

  //loop for creating all the pegs
  for (var row = 1; row <= 10; row++) {
    for (var col = 0; col < pegNumber; col++) {
      pegArray.push(new Peg(pegCorX, pegCorY, 10));
      pegCorX += 60;
    }

    if (row % 2 == 0) {
      //if the row value is an even number, then this condition exucutes
      pegCorX = 50;//starts making the pegs a little before
      pegNumber = 8;
    }
    else {
      //if the row value is an odd number, then this condition exucutes
      pegCorX = 75;//starts making the pegs after some more space
      pegNumber = 7;//makes only seven pegs in that row
      //these two things combined give a zig zag effect in making the pegs
    }

    pegCorY += 50;//moves to another row 
  }

}

function drawParticle() {
  //this function draws the particles
  particleCorX = random(50, 690);
  particleColour = [random(0, 255), random(0, 255), random(0, 255)];

  particleArray.push(new Particle(particleCorX, -20, 10, particleColour));
}