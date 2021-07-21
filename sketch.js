var ground
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
groundimage = loadImage("ground2.png" )
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50, 150, 30, 30)
 trex.addAnimation("running", trex_running)
 trex.scale = 0.5

strokeWidth = 5
 ground = createSprite(300, 180, 600, 30)
ground.addImage("ground", groundimage)
ground.x = ground.width/2
ground.velocityX = -2
 edges = createEdgeSprites();
}

function draw(){
  background("white")

  if(keyDown("space")){
    
trex.velocityY=-10
  
}
if(ground.x<0){
ground.x = ground.width/2
}
  trex.velocityY+=0.5

  trex.collide(ground)

drawSprites();
}
