// O(N+M) time | O(1) space
function searchInSortedMatrix(matrix, target) {
    // Write your code here.
    let currentRow = 0, currentCol = matrix[0].length - 1;
    while (currentRow < matrix.length && currentCol >= 0) {
        if (matrix[currentRow][currentCol] > target) {
            currentCol--;
        } else if (matrix[currentRow][currentCol] < target) {
            currentRow++;
        } else {
            return [currentRow, currentCol];
        }
    }
    return [-1, -1];
}