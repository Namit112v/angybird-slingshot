class SlingShot{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage('sprites/sling1.png');
        this.sling2=loadImage('sprites/sling2.png');
        this.sling3=loadImage('sprites/sling3.png');
        this.pointA= pointA;
        this.sling= Constraint.create(options);
        World.add(world, this.sling);
    }
  
    fly(){

    this.sling.bodyB= null;

    }

    display(){
        image(this.sling1,200,27); 
        image(this.sling2,175,27);
        if(this.sling.bodyB){
        var pointA = this.pointA;
        var pointB = this.sling.bodyB.position;
        strokeWeight(6);
        stroke(48, 22, 8);
        if(pointB.x>220){
            line(pointA.x, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x-20, pointB.y);
            image(this.sling3,pointB.x+25,pointB.y-7,15,30) 
        }
        else{
        line(pointA.x, pointA.y, pointB.x+20, pointB.y);
        line(pointA.x+25, pointA.y, pointB.x+20, pointB.y);
        image(this.sling3,pointB.x-25,pointB.y-7,15,30)
        }
    }
}
}