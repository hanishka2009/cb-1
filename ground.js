class ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
     this.width=width
     this.height=height
     World.add(world,this.body) 
    }
    display(){
        push();
        rectMode(CENTER)
        fill(220,0,0)
        rect(this.body.positionX,this.body.positionY,this.width,this.height);
        pop();
    }
}