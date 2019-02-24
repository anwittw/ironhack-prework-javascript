// Rover Object Goes Here
// ======================
let rover = {
  x: 0,
  y: 0,
  currentPosition: [0,0],
  currentDirection: "N",
  updateCurrentPosition: function() {
    this.currentPosition[0] = this.x;
    this.currentPosition[1] = this.y;
    console.log('The current Position is:' + ' x:' + this.x + ' y:' + this.y)
    console.log(this.currentPosition); 
  },
  turnRover: function(direction) {
    switch (true) {
      case (this.currentDirection === "N" && direction === "right"):
        this.currentDirection = "E"
        break;
      case (this.currentDirection === "E" && direction === "right"):
        this.currentDirection = "S"
        break;
        case (this.currentDirection === "S" && direction === "right"):
        this.currentDirection = "W"
        break;
        case (this.currentDirection === "W" && direction === "right"):
        this.currentDirection = "N"
        break;
        case (this.currentDirection === "N" && direction === "left"):
        this.currentDirection = "W"
        break;
        case (this.currentDirection === "W" && direction === "left"):
        this.currentDirection = "S"
        break;
        case (this.currentDirection === "S" && direction === "left"):
        this.currentDirection = "E"
        break;
        case (this.currentDirection === "E" && direction === "left"):
        this.currentDirection = "N"
        break;
      }
      console.log('Rover current Direction: ' + this.currentDirection)
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
rover.turnRover("left")
rover.turnRover("left")
rover.turnRover("left")
rover.turnRover("left")
