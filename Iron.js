class Iron{

    constructor(x,y){
    var ironProperty = {
        restitution:0.5,
        density:30,
        friction:3
        }
        this.iron = Bodies.rectangle(x,y,50,50, ironProperty)
    World.add(world,this.iron)
    this.width = 50
    this.height = 50
    
    }
    
    display(){
    push()
    fill("black")
    rectMode(CENTER)
    rect(this.iron.position.x , this.iron.position.y , this.width,this.height)
    pop()
    }
    
    
    
    
    
    }