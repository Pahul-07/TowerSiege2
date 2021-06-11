const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
 polygonImg = loadImage("shield.png");
 bgImg=loadImage("baaa.png");
}

function setup(){
    createCanvas(1200,700);
  
    bg = Bodies.circle(600,370,20);
    engine= Engine.create()
    world = engine.world
    Engine.run(engine)

    ground= new Ground(600,690,1200,20);

    stand1= new Ground(560,610,400,10);
    stand2= new Ground(900,320,350,10);
  
    box1= new Box(410,510,50,100);
    box2= new Box(460,510,50,100);
    box3= new Box(510,510,50,100);
    box4= new Box(560,510,50,100);
    box5= new Box(610,510,50,100);
    box6= new Box(660,510,50,100);
    box7= new Box(710,510,50,100);

    box8= new Box(460,410,50,100);
    box9= new Box(510,410,50,100);
    box10= new Box(560,410,50,100);
    box11= new Box(610,410,50,100);
    box12= new Box(660,410,50,100);

    box13= new Box(510,310,50,100);
    box14= new Box(560,310,50,100);
    box15= new Box(610,310,50,100);
  
    box16= new Box(560,210,50,100);

    box17 = new Box(820,220,50,100);
    box18 = new Box(870,220,50,100);
    box19 = new Box(920,220,50,100);
    box20 = new Box(970,220,50,100);
    box21 = new Box(1020,220,50,100);

    box22 = new Box(870,120,50,100);
    box23 = new Box(920,120,50,100);
    box24 = new Box(970,120,50,100);

    box25 = new Box(920,20,50,100);

    captain= new CA();

    polygon = Bodies.circle(160,384,20);
    World.add(world,polygon);

    sling1= new Sling(polygon, {x:160, y:385});

}    


function draw(){
  background(0);

  imageMode(CENTER);
  image(bgImg, bg.position.x, bg.position.y, 1200,740)

  ground.display(); 

  stand1.display();
  stand2.display();

  fill ("skyBlue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill ("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill ("lightGreen");
  box13.display();
  box14.display();
  box15.display();

  fill ("gray");
  box16.display();

  
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();

  sling1.display();
  captain.display();

  fill("blue")
  textFont("hobo");
  textSize(30);
  text("Press space to reset the position of shield",90,100)
    
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 80, 50);

}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
  
function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
    sling1.attach(polygon);}
}