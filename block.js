class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'restitution':0.8,
            'friction':0.2,
            'density':0.1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
   
  
    display(){
      if(this.body.speed < 7 ){
        var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      strokeWeight(2)
      stroke("black")
      rect(pos.x, pos.y, this.width, this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         rect(this.rectangle, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      
    }
    score(){
      if(this.visiblity<0 && this.visiblity>=-105){
              score=score+2;
    }}
  };