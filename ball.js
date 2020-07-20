class Ball{
    constructor(x,y,radius){
     var options = {
         'restitution':0.3,
         'friction':0.5,
         'density':1.0,
         isStatic: false
     }
 this.body=Bodies.circle(x,y,radius,options);
 World.add(world,this.body);
 this.radius=radius;
 }
 display(){
     var pos=this.body.position;
     ellipseMode(CENTER);
     fill("blue")
     ellipse(pos.x,pos.y,this.radius,this.radius);
 }
 }