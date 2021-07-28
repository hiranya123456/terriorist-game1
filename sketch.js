var terriorist1,terrioristimg;
var background1;
var camp1,campimg;
var forestbackground,forestbackgroundimg;
var missile,missileimg;
var plane,planeimg;
var bullets,bulletsimg;
var blasting,blastingimg

function preload(){

terrioristimg=loadAnimation("terriorist1.png","terriorist2.png","terriorist3.png","terriorist4.png","terriorist5.png")
background1=loadImage("forest background.jpg")
campimg=loadImage("camp.png")
missileimg=loadImage("missile.png")
planeimg=loadImage("plane.png")
blastingimg=loadImage("blasting.png")
bulletsimg=loadImage("bullets.jpg")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
   
  camp1=createSprite(100,500);
  camp1.addImage(campimg);

  missile=createSprite(width/2-650,80)
  missile.addImage(missileimg)
  missile.scale=0.1
  missile.visible=false;

  plane=createSprite(width/2-650,40);
  plane.addImage(planeimg);
  plane.scale=0.5;
  
 // blasting=createSprite(width/2-650,80)
 // blasting.visible=false;
  
   
  
  
}

function draw() {
  background(background1);  
  running();


//plane.x=mouseX;
 
if(keyDown("space")){

missile.setVelocity(0,6)
missile.visible=true;

blasting=createSprite(width/2-100,300)
blasting.addImage(blastingimg)
blasting.visible=true;
blasting.scale=1.9
missile.y=blasting.y
missile.destroy();

  
}


  if(keyCode === LEFT_ARROW)
  {
    plane.x = plane.x - 2; 
    
    
  }
  
  if(keyCode === RIGHT_ARROW)
  {
    plane.x = plane.x + 2; 
    
  }
  
  if(keyCode === DOWN_ARROW){
     plane.y=plane.y+2
  }
  if(keyCode===UP_ARROW){
    plane.y=plane.y-2
  }

  
  
    
   
    //packageSprite.x= packageBody.position.x 
    //packageSprite.y= packageBody.position.y 
  
    
    drawSprites();

}



function running(){
if(frameCount%100===0){

  terriorist1=createSprite(displayWidth/2-350,displayHeight-300)
  terriorist1.addAnimation("running",terrioristimg)
  
  terriorist1.velocityX=4
  terriorist1.x=Math.round(random(110,800))
  terriorist1.y=Math.round(random(500,655))
}
}

function keyPressed(){

if(keyCode===RIGHT_ARROW){
  plane.x=plane.x+50
}



}