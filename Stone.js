class Stone{

    constructor(x,y){
    var stoneProperty = {
        restitution:0.8,
        friction:0.9 , 
        density:12
        }
        this.stone = Bodies.rectangle(x,y,50,50, stoneProperty)
    World.add(world,this.stone)
    this.width = 50
    this.height = 50
    
    }
    
    display(){
    push()
    fill("brown")
    rectMode(CENTER)
    rect(this.stone.position.x , this.stone.position.y , this.width,this.height)
    pop()
    }
    
    
    
    
    
    }