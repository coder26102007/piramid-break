const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground1,ground2;
 var box1,box2,box3,box4,box5,box6 ,box7;
 box8,box9,box10,box11,box12,box13 ,box14, box15,box16,box17,box18,box19,box20 ,box21
 box22,box23,box24,box25,box26,box27,box28,box293,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,
 box41,box42,box43,box44,box45,box46,box47,box48,box49,box50;


var ball;
var rope; 

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(650,580,1300,10);
box1 = new Box(850,550,50,50)
  box2 = new Box(850,500,50,50)
  box3 = new Box(850,450,50,50)
  box4 = new Box(850,400,50,50)
  box5 = new Box(850,350,50,50)
  box6 = new Box(850,300,50,50)
  box7 = new Box(850,250,50,50)
  box8 = new Box(900,550,50,50)
  box9 = new Box(900,500,50,50)
 box10 = new Box(900,450,50,50)
box11= new Box(900,400,50,50)
  box12 = new Box(900,350,50,50)
  box13 = new Box(950,300,50,50)
  box14 = new Box(950,250,50,50)
box15= new Box(950,350,50,50)
box16=new Box(1000,250,50,50)
box17=new Box(800,250,50,50)
box18=new Box (800,350,50,50)
box19=new Box(800,350,50,50)
box20=new Box(800,400,50,50)
box21=new Box(800,500,50,50)
box22=new Box(750,250,50,50)
box23=new Box(750,300,50,50)
box24=new Box(750,350,50,50)
box25=new Box(700,250,50,50)
ground1 = new Ground(1100,200,300,10)  
box26=new Box(1100,150,30,30)
box27=new Box(1100,120,30,30)
box28=new Box(1100,90,30,30)
box29=new Box(1100,60,30,30)
box30=new Box(1100,30,30,30)
box31=new Box(1100,0,30,30)
box32 =new Box(1130,150,30,30)
box33 =new Box(1130,120,30,30)
box34 =new Box(1130,90,30,30)
box35 =new Box(1130,60,30,30)
//box36 =new Box(1130,30,30,30)
box37 =new Box(1070,150,30,30)
box38 =new Box(1070,120,30,30)
box39 =new Box(1070,90,30,30)
box40 =new Box(1070,60,30,30)
box41=new Box(1040,150,30,30)
box42=new Box(1040,150,30,30)
box43=new Box(1160,150,30,30)
box44=new Box(1160,150,30,30)






ground2=new Ground(300,800,300,10)

ball = new Ball(200,300,50,50)
rope=new Rope(ball.body,{x:530 ,y:50})
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
 ground1.display();
 ground2.display()
 box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
box26.display()
box27.display()
box28.display()
box29.display()
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
box35.display();
//box36.display();
box37.display();
box38.display();
box39.display();
box40.display();
box41.display();
box42.display();
box43.display();
box44.display();


ball.display();

rope.display();
}





function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}






