var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(backgroundImage);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      spawnredBalloon();
    } else if (select_balloon == 2){
     spawngreenBalloon()
    } else if (select_balloon == 3){
      spawnblueBalloon()
    }else {
     spawnpinkBalloon()
    }
  }


  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


  function spawnredBalloon(){
  if (frameCount % 60 === 0) {
    red = createSprite(600,Math.round(random(10,60)),40,10);
    red.addImage(red_balloonImage)
    red.scale = 0.1;
    red.velocityX = 3;
    
  }
  }
function spawnblueBalloon(){
  //write code for spwaning blue balloons
   if (frameCount % 80 === 0) {
    blue = createSprite(600,Math.round(random(10,60)),40,10);
    blue.addImage(blue_balloonImage)
    blue.scale = 0.1;
    blue.velocityX = 3;
    
}
}
function spawngreenBalloon(){
  //write code for spwaning green balloons
   if (frameCount % 100 === 0) {
    green = createSprite(600,Math.round(random(10,60)),40,10);
    green.addImage(green_balloonImage)
    green.scale = 0.1;
    green.velocityX = 3;
    
}
}
function spawnpinkBalloon(){
  //write code for spwaning pink balloons
  if (frameCount % 120 === 0) {
    pink = createSprite(600,Math.round(random(10,60)),40,10);
    pink.addImage(pink_balloonImage)
    pink.scale = 0.1;
    pink.velocityX = 3;
  }
}