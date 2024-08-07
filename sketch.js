
var trex ,trex_running;
var suelo;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("correr",trex_running)
  trex.scale=0.5
  suelo = createSprite(200,180,400,20)
 
}

function draw(){
  background("wite")
  //tecla para detectar wl salto
  if(keyDown ("space")){
    trex.velocityY = -10
  }

trex.velocityY = trex.velocityY + 0.8
trex.collide(suelo);
  drawSprites();
  

}
