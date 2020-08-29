class Dustbin {
    constructor(x, y, width, height){
     var options = {
        isStatic: true
    }
 
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.dustbin = loadImage("dustbin.png");
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
display(){
    //var pos = this.body.position;
    push();
    fill("red");
    imageMode(CENTER);
    image(this.dustbin, 880, 660, 100, 100);
    pop();
  }
}