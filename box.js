class Box{
    constructor(x,y,w,h){
        var options={
            friction:0,
            restitution:0.5
        }
        
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("thanos.png");
        World.add(world, this.body);
        this.visibility=255;
        this.width=w;
        this.height=h;
    }
    display(){
        if(this.body.speed<6){
        push ();
        translate(0,0);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop(); 
    }
    else{
        World.remove(world, this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        pop();
    }
    }
}