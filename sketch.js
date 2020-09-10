
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3,ball4,ball5,string1,string2,string3,string4,string5,block1,block2,block3,block4,block5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Ball(200,400);
	ball2= new Ball(300,400);
	ball3= new Ball(400,400);
	ball4= new Ball(500,400);
	ball5= new Ball(600,400);
	block1=new Block(400,100);
	ellipseMode(CENTER);
	string1=new Constraints(ball1.body,{x:200,y:100});
	string2=new Constraints(ball2.body,{x:300,y:100});
	string3=new Constraints(ball3.body,{x:400,y:100});
	string4=new Constraints(ball4.body,{x:500,y:100});
	string5=new Constraints(ball5.body,{x:600,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  block1.display();
  //block2.display();
  //block3.display();
  //block4.display();
  //block5.display();
  motion();
  drawSprites();
 
}
function motion(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:54,y:-20});
	  
	}
	
   }



