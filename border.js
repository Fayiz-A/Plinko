//the border class
class Border extends Ground {
   display() {
      var pos = this.body.position;//name spacing for the positions
      
      push();//used so that noStroke or fill doesn't affect the other classes
      noStroke();
      fill("brown");

      rect(pos.x, pos.y, this.width, this.height);

      pop();
   }
}