// O(log N) time - N is the number of elements in the array
// O(1) space
function binarySearch(array, target) {
    // Write your code here.
    let left = 0, right = array.length - 1;
    let middle = Math.round((left+right)/2);
    while(array[middle] !== target) {
        if (array[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        if (right < left) {
            break;
        }
        middle = Math.round((left+right)/2);
    }
    return array[middle] === target ? middle : -1;
}