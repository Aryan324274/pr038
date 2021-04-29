
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(2700, 1500);


	engine = Engine.create();
	world = engine.world;

	
	ground1 = new Ground(1350,height,2700,20)
	ground2 = new Ground(1350,1,2700,20)
	ground3 = new Ground(2700,746,20,1490)
	ground4 = new Ground(1,746,20,1490)





	dustbin1 = new Dustbin(900,700)
	

	dustbin2 = new Dustbin(900,800)
	dustbin3 = new Dustbin(900,900)
	dustbin4 = new Dustbin(900,1000)
	dustbin5 = new Dustbin(900,1100)
	dustbin6 = new Dustbin(900,1200)
	paper=new Paper();

	Engine.run(engine);
  
}


function draw() {
  background(0);

 // createEdgeSprites();
  //dustbin1.bounceOff(ground1);
 // dustbin1.bounceOff(ground2);
 // dustbin1.bounceOff(ground3);
 // dustbin1.bounceOff(ground4);

  ground1.display();	
  ground2.display();	
  ground3.display();	
  ground4.display();	

  dustbin1.display();	
	dustbin2.display();
	dustbin3.display();
	dustbin4.display();
	dustbin5.display();
	dustbin6.display();
	paper.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log(paper.position)
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90 , y:-50})
	}
	
}





