var ball;


function setup() {
  createCanvas(400,400);
  ball=createSprite(100,200,30,40)
}

function draw() 
{
  background(200,145,20);
  
  if(keyIsDown(RIGHT_ARROW)){
    ball.x=ball.x+2
  }

  if(keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-2
  }

  if(keyIsDown(UP_ARROW)){
    ball.y=ball.y-2
  }

  if(keyIsDown(DOWN_ARROW)){
    ball.y=ball.y+2
  }
drawSprites()
}




