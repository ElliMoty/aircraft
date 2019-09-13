const aircraft = "aircraft";
const truck = "truck";

const puzzle = [
  [null, null, aircraft, null, null, null, null],
  [aircraft, null, null, null, aircraft, null, aircraft],
  [null, null, null, null, null, null, aircraft],
  [null, null, null, null, null, null, null],
  [null, aircraft, null, null, null, null, null],
  [null, null, null, aircraft, null, null, null],
  [aircraft, null, null, null, null, null, aircraft]
];

const trucksPerRow = [3, 1, 1, 1, 0, 2, 1];
const trucksPerColumn = [2, 1, 1, 1, 1, 1, 2];

// Possible Truck Position Per Row and Column
const possibleTruckPosition = (row, col) => {
  if (row < 6 && puzzle[row + 1][col] === aircraft) {
    return true;
  }
  if (row > 0 && puzzle[row - 1][col] === aircraft) {
    return true;
  }
  if (col < 6 && puzzle[row][col + 1] === aircraft) {
    return true;
  }
  if (col > 0 && puzzle[row][col - 1] === aircraft) {
    return true;
  }
  return false;
};

// Number of Truck Per Row
const numberOfTruckPerRow = row => {
  let number = 0;

  for (let i = 0; i < puzzle[row].length; i++) {
    if (puzzle[row][i] === truck) {
      number++;
    }
  }
  return number;
};

// Number of Truck Per Column
const numberOfTruckPerColumn = col => {
  let number = 0;

  for (let i = 0; i < 7; i++) {
    if (puzzle[i][col] === truck) {
      number++;
    }
  }
  return number;
};

// Touching Zone
const touchingZone = (row, col) => {
  // horizontal and vertical
  if (col < 6 && puzzle[row][col + 1] === truck) {
    return true;
  }
  if (col > 0 && puzzle[row][col - 1] === truck) {
    return true;
  }
  if (row < 6 && puzzle[row + 1][col] === truck) {
    return true;
  }
  if (row > 0 && puzzle[row - 1][col] === truck) {
    return true;
  }

  // diagonal
  if (row > 0 && col > 0 && puzzle[row - 1][col - 1] === truck) {
    return true;
  }
  if (row > 0 && col < 6 && puzzle[row - 1][col + 1] === truck) {
    return true;
  }
  if (row < 6 && col > 0 && puzzle[row + 1][col - 1] === truck) {
    return true;
  }
  if (row < 6 && col < 6 && puzzle[row + 1][col + 1] === truck) {
    return true;
  }

  return false;
};

// Place Trucks next to Each Aircraft
const placeTruck = () => {
  for (let row = 0; row < puzzle.length; row++) {
    const maxTrucksPerRow = trucksPerRow[row];
    for (let col = 0; col < puzzle[row].length; col++) {
      const maxTrucksPerColumn = trucksPerColumn[col];
      if (puzzle[row][col] === aircraft) {
        continue;
      }
      if (!possibleTruckPosition(row, col)) {
        continue;
      }
      if (numberOfTruckPerRow(row) >= maxTrucksPerRow) {
        continue;
      }
      if (numberOfTruckPerColumn(col) >= maxTrucksPerColumn) {
        continue;
      }
      if (touchingZone(row, col)) {
        continue;
      }
      puzzle[row][col] = truck;
    }
  }
};

placeTruck();
console.log(puzzle);
