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

const maxNumberOfTrucksPerRow = [3, 1, 1, 1, 0, 2, 1];
const maxNumberOfTrucksPerColumn = [2, 1, 1, 1, 1, 1, 2];

// Is this cell the possible place for the fuel truck per row and column?
const isPossiblePlaceForTruck = (row, col) => {
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

// Is this cell next to a placed truck? (They are touching each other)
const isTouchingZone = (row, col) => {
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

// Number of placed truck per row
const numberOfTruckPerRow = row => {
  let number = 0;

  for (let i = 0; i < puzzle[row].length; i++) {
    if (puzzle[row][i] === truck) {
      number++;
    }
  }
  return number;
};

// Number of placed truck per column
const numberOfTruckPerColumn = col => {
  let number = 0;

  for (let i = 0; i < 7; i++) {
    if (puzzle[i][col] === truck) {
      number++;
    }
  }
  return number;
};

const returnToLastTruck = (row, col) => {
  for (let i = row; i >= 0; i--) {
    for (let j = col; j >= 0; j--) {
      if (puzzle[i][j] === truck) {
        return {
          row: i,
          col: j
        };
      }
    }
  }
};

// Place Trucks next to Each Aircraft
const placeTruck = (startRow, startCol, notValidPosition) => {
  for (let row = startRow; row < puzzle.length; row++) {
    const maxTrucksPerRow = maxNumberOfTrucksPerRow[row];
    for (let col = startCol; col < puzzle[row].length; col++) {
      const maxTrucksPerColumn = maxNumberOfTrucksPerColumn[col];
      if (
        notValidPosition &&
        row === notValidPosition.row &&
        col === notValidPosition.col
      ) {
        continue;
      }
      if (puzzle[row][col] === aircraft) {
        continue;
      }
      if (!isPossiblePlaceForTruck(row, col)) {
        continue;
      }
      if (numberOfTruckPerRow(row) >= maxTrucksPerRow) {
        continue;
      }
      if (numberOfTruckPerColumn(col) >= maxTrucksPerColumn) {
        continue;
      }
      if (isTouchingZone(row, col)) {
        continue;
      }
      puzzle[row][col] = truck;
    }
    if (numberOfTruckPerRow(row) < maxTrucksPerRow) {
      const lastTruckPosition = returnToLastTruck(row, 6);
      puzzle[lastTruckPosition.row][lastTruckPosition.col] = null;
      const newStart = returnToLastTruck(
        lastTruckPosition.row,
        lastTruckPosition.col
      );
      placeTruck(newStart.row, newStart.col, lastTruckPosition);
    }
  }
};

placeTruck(0, 0);
console.log(puzzle);
