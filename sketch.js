const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
Paper=new paper(55,580,30);
	

	//Create the Bodies Here.
fill(300,300,300)
	dustbin1=new dustbin(400,670,800,20)
d2=new dustbin(470,600,20,100)
d4=new dustbin(590,600,20,110)
d3=new dustbin(530,650,120,20)
	Engine.run(engine);
  
}


function draw() {

  
  background(0);
  dustbin1.display();
  d2.display();
  d4.display();
 d3.display();
 Paper.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
			Matter.Body.applyForce(Paper.body,Paper.body.position,{x:65,y:-125})
	}
}
