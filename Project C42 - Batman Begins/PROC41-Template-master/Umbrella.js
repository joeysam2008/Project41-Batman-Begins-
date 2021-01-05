class Umbrella{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.image = loadImage("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", 
        "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png")
        this.umbrella = Bodies.circle(x,y,50,options)
        this.radius = 80
        World.add(world, this.umbrella)
    }

    display(){
        var umbrellapos = this.umbrella.position;
        imageMode(CENTER)
        image(this.image, umbrellapos.x, umbrellapos.y+50,300,400)
    }
}