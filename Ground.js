class Ground {
    constructor(x, y, width, height) {
      var options = { 
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
     var pos = this .body .position;
     rectMode(CENTER) ;
     fill(" blue");
     //push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      rect(this.body.position.x,pos.y , this.width, this.height);
      //pop();
    }
  }
  