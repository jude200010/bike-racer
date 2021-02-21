var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2,mainCyclist2;
var opponent1,opponent2,opponent3;
var END =0;
var PLAY =1;
var gameState = PLAY;
var opponent1Img,opponent3Img,opponent4Img,opponent6Img,opponent7Img, opponent9Img;
var distance=0; 
var gameOverImg;
var opponent3,opponent6,opponent9;
var bellSound;


function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  opponent1Img=loadAnimation("opponent1.png");
  opponent3Img=loadAnimation("opponent3.png");
  opponent4Img=loadAnimation("opponent4.png");
  opponent6Img=loadAnimation("opponent6.png");
  opponent7Img=loadAnimation("opponent7.png");
  opponent9Img=loadAnimation("opponent9.png");
  gameOverImg = loadImage("gameOver.png")
  //bellSound = loadSound("bell.mp3")
}

function setup(){
  
createCanvas(700,300);
  
  opponentG = new Group()
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
gameOver = createSprite(300,100);
gameOver.addImage(gameOverImg);  
gameOver.scale = 0.5; 
  

  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
    
    gameOver.visible = false;
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
    var select_item = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (select_item == 1) {
      opponent_1()
    } else if (select_item == 2){
      opponent_2()
      } else if (select_item == 3){
      opponent_3()
    } 
  }
    
    path.velocityX = -(4 + 3* distance/100)
    
    //if(keyDown("w")){
       //bellSound.play();
     //}
    
    distance=distance+1;
    
  if(opponentG.isTouching(mainCyclist)){
    gameState=END
  }
 
  

  }
   
   else if (gameState === END){
    gameOver.visible = true; 
     
     if(keyDown("UP_ARROW")){
       gameState=reset
     }
     
     mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
     
     
     path.velocityX = 0;
     mainCyclist.VelocityX = 0; 
     opponentG.setVelocityXEach(0);
     
   }
  
  
  
  
  
}

function reset(){
 
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  gameState = PLAY;
  gameOver.visible = false;
  opponentG.destroyEach()
  
}

function opponent_1(){
  var opponent1=createSprite(600,Math.round(random(40,66)),10,10)
  opponent1.addAnimation("sahil_Running",opponent1Img)
  opponent1.velocityX=-6
  opponent1.scale=0.07
  opponent1.lifetime=150
  opponentG.add(opponent1)
  }

function opponent_2(){
  var opponent2=createSprite(600,Math.round(random(55,40)),10,10)
  opponent2.addAnimation("sahil_Running",opponent4Img)
  opponent2.velocityX=-6
  opponent2.scale=0.07
  opponent2.lifetime=150
  opponentG.add(opponent2)
  }

function opponent_3(){
  var opponent3=createSprite(600,Math.round(random(70,30)),10,10)
  opponent3.addAnimation("sahil_Running",opponent7Img)
  opponent3.velocityX=-6
  opponent3.scale=0.07
  opponent3.lifetime=150
  opponentG.add(opponent3)
  }