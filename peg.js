//the peg class
class Peg {
   constructor(x, y, radius) {

      var options = {
         //some changes in the default properties of the body
         isStatic: true,
         restitution: 0.6
      }

      //creating the body and adding it to the world
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);

      //storing the parameter for reffering to the radius outside the constructor
      this.diameter = radius*2;
   }

   display() {
      var pos = this.body.position
      push();//this ensures that noStroke and fill do not affect the other classes
      noStroke();
      fill("white");
      circle(pos.x, pos.y, this.diameter);
      pop();
   }
}