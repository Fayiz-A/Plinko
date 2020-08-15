//the ground class
class Ground {
   constructor(x, y, width, height){
      var options = {
         //some changes in the default properties of the body
         isStatic: true,
         restitution: 0.5,
         friction: 0.5
      }

      //creating the body and storing it in the world
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);

      //storing the parameters for reffering to the width and height outside the constructor
      this.width = width;
      this.height = height;
   }

   display() {
      var pos = this.body.position;//name spacing for reffering to the x and y positions of the body
      
      push();//used so that noStroke or fill doesn't affect the other classes
      noStroke();
      fill(255);//colours the shape white
      rect(pos.x, pos.y, this.width, this.height);//creates a rectangle over the body
      pop();
   }
}