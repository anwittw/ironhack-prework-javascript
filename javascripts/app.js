// Rover Object Goes Here
// ======================
let rover = {
  direction: ["W", "N", "E", "S"],
  x: 0,
  y: 0,
  currentPosition: [0,0],
  updateCurrentPosition: function() {
    this.currentPosition[0] = this.x;
    this.currentPosition[1] = this.y;
    console.log('The current Position is:' + ' x:' + this.x + ' y:' + this.y)
    console.log(this.currentPosition);
  }
}
// ======================
function turnLeft(rover) {

  console.log("turnLeft was called!");
}

function turnRight(rover) {
  console.log("turnRight was called!");
}

function moveForward(rover) {
  console.log("moveForward was called")
}

rover.updateCurrentPosition()