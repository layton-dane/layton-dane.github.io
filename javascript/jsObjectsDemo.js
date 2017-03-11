function objects() {
  var rect = new shape("Rectangle",4);
  var tri = new shape("Triangle",3);
  console.log(rect.shapeName + " has " + rect.numSides + " sides!");
  console.log(tri.shapeName + " has " + tri.numSides + " sides!");
}

function objectsWithMethods() {
  var rect = new shape("Rectangle",4);
  var tri = new shape("Triangle",3);
  console.log(rect.toString());
  console.log(tri.toString());

  var oct = new shape("Octagon",7);
  console.log(oct.toString());
  oct.changeSides(8);
  console.log(oct.toString());
}
/*
  Object constructor function
*/
function shape(name, sides) {
  this.shapeName = name;
  this.numSides = sides;
  this.toString = function () {
    return this.shapeName + " has " + this.numSides + " sides!";
  };
  this.changeSides = function(sides) {
    this.numSides = sides;
  }
}
