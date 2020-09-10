class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            density:3
           
        }
        this.radius=50;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        var a=this.body.position;
      ellipseMode(CENTER);
      ellipse(a.x,a.y,this.radius+50,this.radius+50);
    } 
}