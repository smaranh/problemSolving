export function cherryPickup(grid: number[][]): number {
    let pickedCherries = 0,
        row = 0,
        col = 0,
        rowMax = grid.length,
        colMax = grid[0].length;
    
    while(row<rowMax && col<colMax) {
        if (grid[row][col]===1) {
            pickedCherries++;
            grid[row][col] = 0;
            (col < colMax-1) ? col++ : row++;
        } else if (grid[row][col]===-1) {
            col--;
            row++;
        } else if (grid[row][col]===0) {
            (col < colMax-1) ? col++ : row++;
        }
    }
  row=rowMax-1;
  col=colMax-1;
  while(row!==0 || col!==0) {
        if (grid[row][col]===1) {
            pickedCherries++;
            grid[row][col] = 0;
            (col !== 0) ? col-- : row--;
        } else if (grid[row][col]===-1) {
            col++;
            row++;
        } else if (grid[row][col]===0) {
            (col !== 0) ? col-- : row--;
        }
    }
    return pickedCherries;
};