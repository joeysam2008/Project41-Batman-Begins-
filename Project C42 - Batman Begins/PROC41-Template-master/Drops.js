class Drop{
    constructor(x,y){
        var options ={
            restitution: 0.5,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,5,options)
        this.radius = 3
        World.add(world, this.body)
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)})
        }
    }

    display(){
        stroke("lightblue")
        fill("lightblue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
    
}