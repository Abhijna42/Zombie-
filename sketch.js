const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
var options={
    restitution:20
  }
  object= Bodies.circle(200,200,20,options);
  World.add(world,object);
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground)
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);


}

function draw() {
  background("black");
   Engine.update(engine);
    ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}