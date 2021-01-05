const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var boyWalkingAnimation, boy;
var thunder, thunder1, thunder2, thunder3, thunder4;
var drops = [];
var maxDrops = 100;
var thunderCreatedFrame = 0;

function preload(){
    boyWalkingAnimation = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", 
    "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png")

    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
    thunder3 = loadImage("thunder3.png");
    thunder4 = loadImage("thunder4.png");

}

function setup(){
   createCanvas(500,600)
   engine = Engine.create();
   world = engine.world;


   umbrella = new Umbrella(250, 300);

   boy = createSprite(250, 380, 20, 20)
   boy.addAnimation("boyWalking", boyWalkingAnimation)
   boy.scale = 0.5;  
   
   if(frameCount%80 === 0){
       
       for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
        }

   }
}

function draw(){
    Engine.update(engine);
    background(0);

    var randomNum = Math.round(random(1,4));
    if(frameCount%50 === 0){
        
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(100,400), random(100,50), 10, 10);
        switch(randomNum)
        {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.3)


    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    //umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    

    drawSprites();
}   

