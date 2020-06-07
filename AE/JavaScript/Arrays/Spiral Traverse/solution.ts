function spiralTraverse(array) {
    // Write your code here.
    let last_col = array[0].length-1,
            last_row = array.length-1;
    return traverse(last_col, last_row, array);
}

function traverse(last_col, last_row, array) {
    let currow = 0, curcol = 0, oneD_array = [];
    while(currow <= last_row && curcol <= last_col) {
        serializeTopBorder(array, currow, curcol, last_col, oneD_array);
        currow++;
        if (currow > last_row) {
            break;
        }
        serializeRightBorder(array, currow, last_row, last_col, oneD_array);
        last_col--;
        if (curcol > last_col) {
            break;
        }
        serializeBottomBorder(array, curcol, last_row, last_col, oneD_array);
        last_row--;
        if (currow > last_row) {
            break;
        }
        serializeLeftBorder(array, currow, curcol, last_row, oneD_array);
        curcol++;
        if (curcol > last_col) {
            break;
        }
    }
    return oneD_array;
}

function serializeTopBorder(array, currow, curcol, last_col, oneD_array) {
    for (let i=curcol; i<=last_col; i++) {
        oneD_array.push(array[currow][i]);
    }
}

function serializeRightBorder(array, currow, last_row, last_col, oneD_array) {
    for (let i=currow; i<=last_row; i++) {
        oneD_array.push(array[i][last_col]);
    }
}

function serializeBottomBorder(array, curcol, last_row, last_col, oneD_array) {
    for (let i=last_col; i>=curcol; i--) {
        oneD_array.push(array[last_row][i]);
    }
}

function serializeLeftBorder(array, currow, curcol, last_row, oneD_array) {
    for (let i=last_row; i>=currow; i--) {
        oneD_array.push(array[i][curcol]);
    }
}  