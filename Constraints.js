class Constraints{
    constructor(bodyA,pointB){
       
        var options={
         'bodyA':bodyA,
          
         'pointB':pointB,
         'stiffness':0.4,
         'length':300                                    
        }
        this.bodyA=bodyA;
       this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
         strokeWeight(3)
         line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
     }
}