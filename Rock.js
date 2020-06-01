class Rock {
    constructor(x,y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.3
      }
      this.body = Bodies.rectangle(x,y,30,20,options);
      this.width = 30;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255, 233, 0);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };