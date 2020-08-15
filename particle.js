//the particle class 
class Particle {
   constructor(x, y, radius, colour){
      var options = {
         //some changes in the default properties of the body
         isStatic: false,
         density: 1.3,
         restitution: 0.6
      }

      //creating the body and adding it to the world
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);

      //storing the parameter for reffering to the radius outside the constructor
      this.diameter = radius*2;
      this.colour = colour;
   }

   display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();//this ensures that fill and noStroke do not affect the other classes

      translate(pos.x, pos.y);
      rotate(angle);
      
      noStroke();
      fill(this.colour);
      circle(0, 0, this.diameter);

      pop();
   }
}