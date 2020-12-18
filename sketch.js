
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	//Create the ground here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	//Create the Bodies Here.

	paper1=new Paper(200,200,20,20)

box1=new Box(420,490,25,200)
box2=new Box(490,500,200,25)
box3=new Box(620,500,25,200)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper1.display()
 box1.display()
 box2.display()
 box3.display()


}

function keyPressed(){
      if (keyCode === UP_ARROW){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-71})
	  }

}



