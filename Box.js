class Box {
  constructor(x, y, width, color) {
    this.body = Bodies.rectangle(x, y, width, width);
    this.width = width;
    this.color = color;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER)
    var angle = this.body.angle;
    if(this.body.speed < 5){
      push();
      fill(this.color);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rect(0, 0, this.width, this.width);
      pop();
    }
    else{
      World.remove(world, this.body);
      this.Visiblity = this.Visiblity - 1;
      push();
      tint(255, this.Visiblity);
      rect(-50, -50, this.width, this.width);
      pop();
    }
  }

  score(){
    if(this.Visiblity < 250 && this.Visiblity > 150) {
      score++;
    }
  }
};
