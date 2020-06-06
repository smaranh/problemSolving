function insertionSort(array) {
// Write your code here.
    for (let i=1; i<array.length; i++) {
        for (let j=i; j>0; j--) {
            const curNum = array[j];
            const nextNum = array[j-1];
            if (curNum < nextNum) {
                [array[j], array[j-1]] = [array[j-1], array[j]];
            } else {
                break;
            }
        }
    }
    return array;
}