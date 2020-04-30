const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,ground;
var ground1,ground2;

function setup(){

    var canvas= createCanvas(400,400);
   engine=Engine.create();
   box1=new Box(200,200,100,30);
   box2= new Box(240,100,40,40);
   ground1=new Ground(200,0,400,30);
   ground2=new Ground(200,50,400,10);


   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    ground2.display();

}

