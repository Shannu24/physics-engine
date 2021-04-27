
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box,box2,box3,ground;


function setup() {
  createCanvas(800,400);
  
 engine=Engine.create();
 world=engine.world  
var options={
  restitution:2
}

 box=Bodies.rectangle(400,200,50,50,options);
 World.add(world,box);

 var options={
  restitution:2
}

 box2=Bodies.rectangle(200,200,50,50,options);
 World.add(world,box2);

 var options={
  restitution:2
}

 box3=Bodies.rectangle(600,200,50,50,options);
 World.add(world,box3);


 var options={
  isStatic:true
}
 ground=Bodies.rectangle(400,350,800,30,options);
 World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)

  fill("blue")
  rect(box.position.x,box.position.y,50,50);
  rect(box2.position.x,box2.position.y,50,50);
  rect(box3.position.x,box3.position.y,50,50);

  fill("white")
  rect(ground.position.x,ground.position.y,800,30);

  
 
  
}