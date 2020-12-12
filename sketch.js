const Engine = Matter.Engine;
const World =Matter.World; 
const Bodies =Matter.Bodies;

var box1;
var box2;

var ground1;

var engine,world; 



function setup() {
var canvas = createCanvas(800,400); 
engine = Engine.create(); 



world = engine.world; 



box1 = new box(200,300,50,50);

box2 = new box(240,100,50,100);

ground1 = new ground(200,height,400,20)

}
  
  function draw() { 
   background(0);
Engine.update(engine);

box2.display();
box1.display();

ground1.display();

 }