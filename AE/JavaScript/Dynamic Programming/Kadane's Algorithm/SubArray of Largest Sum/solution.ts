function kadanesAlgorithm(array) {
    // Write your code here.
    let sum = array[0];
    let tempSum = array[0];
    let startIdx = 0;
    let endIdx = 1;
    let tempStartIdx = 0;
    let tempEndIdx = 1;
    for (let i = 1; i < array.length; i++) {
        tempSum += array[i];
        tempEndIdx = i;
        if (array[i] > tempSum) {
            tempSum = array[i];
            tempStartIdx = i;
        }
        if (tempSum > sum) {
            sum = tempSum;
            startIdx = tempStartIdx;
            endIdx = tempEndIdx;
        }
    }
    return array.slice(startIdx, endIdx + 1);
}