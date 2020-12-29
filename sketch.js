var thickness, wall, crash
var speed, weight, bullet

function setup() {
  createCanvas(1600,400);

    speed = random(223,321)
    weight = random(30,52)
    thickness = random(22,83)

    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = color(80,80,80);
     
    bullet = createSprite(50,200,50,10);
    bullet.velocityX = speed;
    bullet.shapeColor = color(255);
    
}

function draw() {
  background("purple");

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    crash = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    
    if(crash > 9){
      bullet.shapeColor = color(255,0,0);
    }
    if(crash < 9 && crash > 11){
      bullet.shapeColor = color(230,230,0);
    }
    if(crash < 11){
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
