# Aircraft Refuelling Puzzle

## Description

- 9 aircraft are parked at an airport and need to be refuelled before they can take off.
- Fuel trucks are used to refuel the aircraft.

## Task

- Place fuel trucks in the grid.
- Each aircraft should have one fuel truck next to it (horizontally or vertically).
- Fuel trucks do not touch each other, not even diagonally.
- The numbers outside the grid show the total number of the fuel trucks in the corresponding row or columns.

## Solution

Start the puzzle from (0,0) point - for the first time I started the puzzle on the paper to find the solution and to understand the logic behind - In this point the program should check some conditions like:

- is there any aircraft in this cell

```
if (puzzle[row][col] === aircraft) {
    continue;
}
```

- isn't this cell the possible position to place a truck

```
if (!isPossiblePlaceForTruck(row, col)) {
    continue;
}
```

- is this cell a touching zone

```
if (isTouchingZone(row, col)) {
    continue;
}
```

- if we place a truck here will we overpass the max required number of trucks per row and per column.

```
if (numberOfTruckPerRow(row) >= maxTrucksPerRow) {
    continue;
}
if (numberOfTruckPerColumn(col) >= maxTrucksPerColumn) {
    continue;
}
```

If the return value for all above conditions are FALSE, so a truck will be placed in this point and we will move forward. But if one of these conditions return TRUE, the program will leave this cell and continue to find another place from next cell. When the program check all the cells in a row and place some trucks after checking all conditions, it will continue from another row and from column 0.

### Helper functions

- To determine which cells are the possible positions for the fuel trucks around the aircraft. The return value will be a boolean.

```
const isPossiblePlaceForTruck = (row, col) => {...}
```

- to distinguish the cells are next to the possible places for the trucks as 'Touching Zone'. We can't place the trucks there as part of the puzzle role. The return value will be a boolean.

```
const isTouchingZone = (row, col) => {...}
```
### Recursive Call

One issue that should be addressed is when the program can't place any trucks in a row or place less trucks in comparison to the max number of trucks per row. It happens because there are more than one possible position to put a truck around an aircraft. For this issue, the program will stop continue to go to next row and instead it will return back cell by cell to find the position of the last truck.

```
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
```

In this point the last truck will be removed and the cell will be considered as a not valid position, because we not it doesn't lead to a solution. The program will start recursively to find another place for removed truck from the second last truck position (new start for the program). If the program check the remained cells and still can't find a cell to replace last truck, it will return back one step more and this time the second last truck will be removed and now the position of the second last truck is a not valid position! **For every recursive call we have only one notValidPosition.**

### End
I think this is a good solution because it emulates the natural way of solving it. It is easy to understand and it works! 🤩
