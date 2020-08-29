class Paper {
    constructor(x, y, radius){
      var options = {
        restitution:0.8,
        friction:1.0,
        density: 1.0,
        isStatic: false
    }
 
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
    this.paper = loadImage("paper.png");
}
display(){
    fill("green");
    imageMode(CENTER);
    image(this.paper, this.body.position.x, this.body.position.y, this.radius, this.radius);
  }
}