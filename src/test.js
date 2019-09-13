// // aircraft positions
// const aircraftPosition = puzzle => {
//   let position = [];
//   for (let row = 0; row < puzzle.length; row++) {
//     for (let col = 0; col < puzzle[row].length; col++) {
//       if (puzzle[row][col] === aircraft) {
//         position.push([row, col]);
//       }
//     }
//   }
//   return position;
// };

// console.log(aircraftPosition(puzzle));

// Fuel Truck possible positions based on aircraft position
// const fuelTruckPosition = p => {
//   let possibleTruckPlace = [];

//   for (let i = 0; i < p.length; i++) {
//     possibleTruckPlace.push([
//       [p[i][0], p[i][1] + 1],
//       [p[i][0], p[i][1] - 1],
//       [p[i][0] + 1, p[i][1]],
//       [p[i][0] - 1, p[i][1]]
//     ]);
//   }
//   return possibleTruckPlace;
// };

// console.log(fuelTruckPosition(aircraftPosition(puzzle)));

// Touching zones
// const touchingZone = arr => {
//   let touchPosition = [];

//   for (let i = 0; i < arr.length; i++) {
//     touchPosition.push([
//       [arr[i][0] - 1, arr[i][1] - 1],
//       [arr[i][0] - 1, arr[i][1] + 1],
//       [arr[i][0] + 1, arr[i][1] - 1],
//       [arr[i][0] + 1, arr[i][1] + 1]
//     ]);
//   }
//   return touchPosition;
// };

// console.log(touchingZone(aircraftPosition(puzzle)));

// const possibleTruckPlaces = fuelTruckPosition(aircraftPosition(puzzle));
// console.log(possibleTruckPlaces);

// Final function to place Truck
// const placeTruck = (puzzle, possibleTruckPlaces) => {
//   let row;
//   let col;
//   for (let i = 0; i < possibleTruckPlaces.length; i++) {
//     for (let j = 0; j < possibleTruckPlaces[i].length; j++) {
//       row = possibleTruckPlaces[i][j][0];
//       col = possibleTruckPlaces[i][j][1];
//     }
//   }
//   puzzle[row][col] === truck;
//   return { row, col };
// };

// console.log(placeTruck(puzzle, possibleTruckPlaces));
