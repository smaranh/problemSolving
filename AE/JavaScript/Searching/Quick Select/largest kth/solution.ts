function quickselect(array, k) {
    // Write your code here.
    let index = quickSort(array, 0, array.length-1);
    while(index !== array.length - k) {
        index = (index > array.length - k) ? quickSort(array, 0, index-1) : 
        quickSort(array, index+1, array.length-1);
    }
    return array[index];
}

function quickSort(array, leftM, pivotIdx) {
    let rightM = pivotIdx-1;
    while (leftM <= rightM) {
        const left = array[leftM];
        const right = array[rightM];
        const pivot = array[pivotIdx];
        if (left <= pivot) {
            leftM++;
        } else if (right > pivot) {
            rightM--;
        } else if (left > pivot && right < pivot) {
            [array[leftM], array[rightM]] = [array[rightM], array[leftM]];
            leftM++;
            rightM--;
        }
    }
    [array[pivotIdx], array[leftM]] = [array[leftM], array[pivotIdx]];
    return leftM;
}