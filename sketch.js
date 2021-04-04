const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    pig1 = new Pig(810,350);
    box2 = new Box(920,320,70,70);
    log1 = new Log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70);
    pig2 = new Pig(810,220);
    box4 = new Box(920,240,70,70);
    log2 = new Log(810,180,300,PI/2);
    
    log3 = new Log(760,120,150,PI/7);
    box5 = new Box(810,160,70,70);
    log4 = new Log(870,120,150,-PI/7);

    bird = new Bird(100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    fill("red");
    box1.display();
    fill("yellow");
    box2.display();
    fill("green");
    ground.display();
    fill("blue");
    pig1.display();
    fill("orange");
    log1.display();
    fill("red");
    box3.display();
    fill("yellow");
    box4.display();
    fill("blue");
    pig2.display();
    fill("orange");
    log2.display();
    fill("red");
    box5.display();
    fill("orange");
    log3.display();
    fill("orange");
    log4.display();
    fill("white");
    bird.display();
}