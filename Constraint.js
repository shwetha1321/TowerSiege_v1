class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
         World.add(world,this.body)
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){

        this.body.bodyA = body;

    }

    display(){
        if(this.body.bodyA){
        var pointA = this.body.bodyA.position
        var pointB = pointB;

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

}