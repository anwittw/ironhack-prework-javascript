// Rover Object
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
  },
  moveRover: function() {
    switch (this.currentDirection) {
      case "N":
      this.y = this.y + 1;
      break;
      case "E":
      this.x = this.x + 1;
      break;
      case "S":
      this.y = this.y - 1;
      break;
      case "W":
      this.x = this.x - 1;
      break;
    }
    this.updateCurrentPosition()
  }
  }


// Buttons

document.querySelector('#turn-left').addEventListener('click', function(e) {
  rover.turnRover("left");
})

document.querySelector('#turn-right').addEventListener('click', function(e) {
  rover.turnRover("right");
})
document.querySelector('#move-forward').addEventListener('click', function(e) {
  rover.moveRover();
})


function buildGrid() {
  for (i = 0; i < 60; i++) {
    const newCordinate = document.createElement("div"); 
    const getGrid = document.getElementById('grid-container');
    getGrid.appendChild(newCordinate);
    console.log(i);
  }
}



buildGrid();