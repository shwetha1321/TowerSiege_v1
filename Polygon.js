 class Polygon {
     constructor(x,y){
         var options = {
             'restitution' :0.1,
             'friction' :0.3,
             'density' :0
         }
         
         this.image = loadImage("polygon.png")
         this.polygon = Bodies.circle(x,y,30,options);
         World.add(world,this.polygon);
     }

     display(){
        var polygonpos = this.body.position

        image(this.image,polygonpos.x,polygonpos.y)

     }

 }