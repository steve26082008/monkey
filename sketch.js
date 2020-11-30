var END;
var PLAY;
var gameState = 1;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var food;
var FoodGroup, obstacleGroup;
var score = 1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 FoodGroup = new Group();  
obstacleGroup = new Group();
}



function setup() {
createCanvas(530,365); 
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
ground=createSprite(260,350,600,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
invisibleGround=createSprite(260,350,600,10);



}


function draw() {
background("green");
  
if (keyDown("space") && monkey.y >= 230) {
monkey.velocityY = -13;
  }
  
 monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround);
  
  text("Score : " + score, 265, 50);
  
  if (monkey.isTouching(FoodGroup)) {
    FoodGroup.destroyEach();
    score = score + 1;
  }
  
  FOOD();
  OBSTACLE();
  
 if (monkey.isTouching(obstacleGroup)) {
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    score = 0;
  }
  
  
  
  
 drawSprites();
}

function FOOD() {

  if (frameCount % 80 === 0) {
    food = createSprite(530, 260, 20, 20);
    food.y = Math.round(random(120, 200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -5;
    food.setLifetime = 150;

    FoodGroup.add(food);
  }

}

function OBSTACLE() {

  if (frameCount % 300 === 0) {
    obstacle = createSprite(510, 330, 40, 40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.setLifetime = 150;

    obstacleGroup.add(obstacle);

  }
}


