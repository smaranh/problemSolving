// O(N^2) time - N is length of array
// O(1) space
function bubbleSort(array) {
    // Write your code here.
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length; j++) {
            const currentNum = array[j];
            const nextNum = array[j+1];
            if (currentNum > nextNum) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}