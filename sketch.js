const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divsionHeight;
var particles=[]
var plinkos=[]
var divisions=[]
var ground1;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  divisionHeight=300;
    ground1=new Ground(240,790,500,20)
    for (var k=0;k<=width;k=k+80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    }
   
    for (var j=40;j<=width;j=j+50){
      plinkos.push(new Plinko(j,75,20))
    }
    for (var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175,20))
    }
    for (var j=65;j<=width-20;j=j+50){
      plinkos.push(new Plinko(j,275,20))
    }
    for (var j=90;j<=width-30;j=j+50){
      plinkos.push(new Plinko(j,375,20))
    }

  }

function draw() {
  background("lightblue");  
  Engine.update(engine);
 
 
  for (var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  
  }
   


 

for (var k=0;k<divisions.length;k++){
  divisions[k].display();

}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  
}
for (var j=0;j<particles.length;j++){
  particles[j].display();
}



  ground1.display();
  drawSprites();
}

 