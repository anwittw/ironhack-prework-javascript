// Rover Object
let rover = {
  x: 0,
  y: 0,
  currentPosition: "00",
  currentDirection: "N",
  updateCurrentPosition: function() {
    this.currentPosition = String(this.x) + String(this.y)
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
  rover.turnRover("right");
})

document.querySelector('#turn-right').addEventListener('click', function(e) {
  rover.turnRover("left");
})
document.querySelector('#move-forward').addEventListener('click', function(e) {
  rover.moveRover();
  buildGrid(resetGrid);
})

function buildGrid(callback) {
  callback();
  let ex = 0;
  let yp = 0;
  let className = "";
  for (i = 0; i < 55; i++) {
    const getGrid = document.getElementById('grid-container');
    const newCordinate = document.createElement("div");
    className = String(ex) + String(yp);
    if (rover.currentPosition === className) {
    newCordinate.setAttribute("class","cordinate-rover");
    } else {
    newCordinate.setAttribute("class", className);
    }
    getGrid.appendChild(newCordinate);
    ex = ex +1;
    if (i === 10 || i === 21 || i === 32 || i === 43 ) {
      ex = 0;
    }
    if (i === 10 || i === 21 || i === 32 || i === 43 ) {
      yp = yp +1;
    }
  }
}

function resetGrid() {
  const getGrid = document.getElementById('grid-container');
  while (getGrid.firstChild) {
    getGrid.removeChild(getGrid.firstChild);
  }
  console.log("grid reseted");
  return true
}

buildGrid(resetGrid);

