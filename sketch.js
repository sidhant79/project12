var road,roadImage;
var Runner ; RunnerAnimation
var invisible1,invisible2;

function preload(){
  //pre-load images

  roadImage=loadImage ("path.png");
  RunnerAnimation=loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road=createSprite(200,200);
  road.addImage(roadImage);

  invisible1=createSprite(50,200,40,400);
  invisible2=createSprite(350,200,40,400);
  invisible1.visible=false;
  invisible2.visible=false;

  Runner=createSprite(305,350,25,100);
  Runner.addAnimation("running",RunnerAnimation);
  Runner.scale=0.08

  
}

function draw() {
  
  
  background(0)

  road.velocityY=10

  if (road .y > 450) {
  road.y=height/2;
  }

  Runner.x=mouseX

  
Runner.collide(invisible1)
Runner.collide(invisible2)
  

 
drawSprites() 
}
