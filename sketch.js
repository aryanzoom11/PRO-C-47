var chrono
function preload(){
bgImg=loadImage("bg.jpg")
chronoImg=loadImage("chrono.png")
coinImg=loadImage("coin.jpg")


}
function setup(){
createCanvas(1000,600);

bg1=createSprite(50,100,500,20)
bg1.addImage(bgImg)
bg1.velocityX=-1
bg1.scale=3

chrono=createSprite(200,100);
chrono.shapeColor="blue";
chrono.addImage(chronoImg)
chrono.scale=0.3

ground=createSprite(500,320,1000,20)





}
function draw(){
background("white");
//resetting the ground
 if(bg1.x<100){
   bg1.x=250;
 }
 


chrono.velocityY=chrono.velocityY+0.7


chrono.collide(ground)
//calling the keycontrol funtion
keyControls();
spawnCoin();





drawSprites()
}
// this is a function definition of keycontrols 



function keyControls(){
 
      if(keyWentDown (RIGHT_ARROW)){
        chrono.velocityX=10                     
      }
    if(keyWentUp(RIGHT_ARROW)){
      chrono.velocityX=0
    }
    
        if(keyDown("space")){
          chrono.velocityY=-4
        }
}
function spawnCoin(){
  if(frameCount%60==0){
    var coin=createSprite(random(50,1000),random(50,250),50,50)
    coin.addImage(coinImg)
    coin.scale=0.04
    coin.velocityX=-7;
  }

}



























