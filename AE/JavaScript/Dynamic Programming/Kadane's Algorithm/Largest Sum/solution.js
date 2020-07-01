// O(N) time | O(1) space
function kadanesAlgorithm(array) {
// Write your code here.
    let sum = tempSum = array[0];
    for (let i=1; i<array.length; i++) {
        tempSum += array[i];
        if (array[i] > tempSum) tempSum = array[i];
        if (tempSum > sum) sum = tempSum;
    }
    return sum;
}