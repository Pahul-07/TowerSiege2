class CA{
    constructor(){
        this.body= Bodies.rectangle(145, 385, 0,0,{isStatic:true});
        this.image= loadImage("cap.png");
        World.add(world,this.body)
    }
      display(){
        push();
        imageMode(CENTER);
        image(this.image,145,390,290,200);
        pop();
    }

}