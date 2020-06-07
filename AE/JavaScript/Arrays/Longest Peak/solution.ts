// O(N) time - N is array.length
// O(1) space
function longestPeak(array) {
    // Write your code here.
    let count = 0;
    for (let i=1; i<array.length-1; i++) {
        if (array[i] > array[i+1] && array[i] > array[i-1]) {
            const length = getLength(i, array);
            if (length > count) {
                count = length;
            }
        }
    }
    return count;
}

function getLength(idx, array) {
    let left = idx-1, right = idx+1, 
            findingLeftmost = true, findingRightmost = true;
    while(findingLeftmost || findingRightmost) {
        if (array[left-1] != null && array[left] > array[left-1]) {
            left--;
        } else {
            findingLeftmost = false;
        }
        if (array[right+1] != null && array[right] > array[right+1]) {
            right++;
        } else {
            findingRightmost = false;
        }
    }
    return right - left + 1;
}