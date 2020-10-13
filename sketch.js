const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function setup() {
 var canvas =  createCanvas(1400,575);
  engine = Engine.create();
  world = engine.world;

  wall1 = new Wall (100,225,40,290);
  wall2 = new Wall (300,225,40,290);   
  wall3 = new Wall (200,120,40,200);
  wall4 = new Wall (38.5,280,40, 180);  
  wall5 = new Wall (361,280,40,180);
  wall6 = new Wall (200,295,290,150);

}
function draw() {
  background(rgb(0, 13, 26));  
  scale(1.5);
Engine.update(engine);

translate(200, 20);

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();

noStroke();

fill(rgb(255, 255, 255));
triangle(200,-20,139,60,261,60);
triangle(40,130,-5,190,85,190);
triangle(300,10,259,80,341,80);
triangle(100,10,60,80,140,80);
triangle(360,130,315,190,405,190);
rectMode(CENTER);
fill(rgb(33,33,33));
rect(200,330,70,80);

drawSprites();
}