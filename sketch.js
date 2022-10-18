let ground;
let lander;
var lander_img;
var bg_img;
var fuel = 100;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Velocidade Vertical: "+round(vy),800,75);
  text("Combústivel: "+fuel,600,75);
  pop();

  //descida
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx;
  drawSprites();
}

function keyPressed(){
  if (keyCode == 87 ) {
    vy = -1
    fuel -= 5
  }
  if (keyCode == 68) {
    vx += 0.5
    fuel -= 5
  }
  if (keyCode == 65) {
    vx -= 0.5
    fuel -= 5
  }
}




