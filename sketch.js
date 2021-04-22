
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1= new Ground(668,540,320,10)
   ground2= new Ground(700,685,1400,30)
   ground3= new Ground(1195,325,240,10)
   polygon1= new Polygon(200,100,45,45)
   chain= new Chain(polygon1.body,{x:150,y:430});
   block1= new Block(540,508,36,50)
   block2= new Block(576,508,36,50)
   block3= new Block(612,508,36,50)
   block4= new Block(648,508,36,50)
   block5= new Block(684,508,36,50)
   block6= new Block(720,508,36,50)
   block7= new Block(756,508,36,50)
   block8= new Block(576,458,36,50)
   block9= new Block(612,458,36,50)
   block10= new Block(648,458,36,50)
   block11= new Block(684,458,36,50)
   block12= new Block(720,458,36,50)
   block13= new Block(756,458,36,50)
   block14= new Block(792,508,36,50)
   block15= new Block(612,408,36,50)
   block16= new Block(648,408,36,50)
   block17= new Block(684,408,36,50)
   block18= new Block(720,408,36,50)
   block19= new Block(648,358,36,50)
   block20= new Block(684,358,36,50)
   block21= new Block(1104,278,36,50)
   block22= new Block(1140,278,36,50)
   block23= new Block(1176,278,36,50)
   block24= new Block(1212,278,36,50)
   block25= new Block(1248,278,36,50)
   block26= new Block(1284,228,36,50)
   block27= new Block(1140,228,36,50)
   block28= new Block(1176,228,36,50)
   block29= new Block(1212,228,36,50)
   block30= new Block(1248,228,36,50)
   block31= new Block(1176,178,36,50)
   block32= new Block(1212,178,36,50)
  
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  ground1.display()
  ground2.display()
  ground3.display()
  polygon1.display()
  chain.display()
  block1.display()
  block1.score()
  block2.display()
  block2.score()
  block3.display()
  block3.score()
  block4.display()
  block4.score()
  block5.display()
  block5.score()
  block6.display()
  block6.score()
  block7.display()
  block7.score()
  block8.display()
  block8.score()
  block9.display()
  block9.score()
  block10.display()
  block10.score()
  block11.display()
  block11.score()
  block12.display()
  block12.score()
  block13.display()
  block13.score()
  block14.display()
  block14.score()
  block15.display()
  block15.score()
  block16.display()
  block16.score()
  block17.display()
  block17.score()
  block18.display()
  block18.score()
  block19.display()
  block19.score()
  block20.display()
  block20.score()
  block21.display()
  block21.score()
  block22.display()
  block22.score()
  block23.display()
  block23.score()
  block24.display()
  block24.score()
  block25.display()
  block25.score()
  block26.display()
  block26.score()
  block27.display()
  block27.score()
  block28.display()
  block28.score()
  block29.display()
  block29.score()
  block30.display()
  block30.score()
  block31.display()
  block31.score()
  block32.display()
  block32.score()
  
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode===32){
    chain.attach(polygon1.body)
    }
}



