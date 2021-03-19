const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var engine,world;

function setup()
{
    createCanvas(800,800);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(400,750,800,10);

    box1=new Box(500,725,50,50);
    box2=new Box(525,725,50,50);
    box3=new Box(550,725,50,50);
    box4=new Box(575,725,50,50);
    box5=new Box(500,700,50,50);
    box6=new Box(520,700,50,50);
    box7=new Box(550,700,50,50);
    box8=new Box(575,700,50,50);
    box9=new Box(500,675,50,50);
    box10=new Box(520,675,50,50);
    box11=new Box(550,675,50,50);
    box12=new Box(575,675,50,50);
    box13=new Box(500,650,50,50);
    box14=new Box(520,650,50,50);
    box15=new Box(550,650,50,50);
    box16=new Box(575,650,50,50);

    bob=new Bob(300,500,100);

    rope1=new Rope(bob.body,{x:200,y:500});

}

function draw()
{
    background(255,255,0);
    Engine.update(engine);

    ground.display();

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

    bob.display();

    rope1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope1.fly();
}

function keyPressed(){
    if(keyCode === 32)
    {
        Matter.Body.setPosition(bob.body,{x:300,y:500});
        rope1.attach(bob.body);
    }
}