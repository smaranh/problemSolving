// O(N) time - N is the number of elements in array
// O(N) space - N is the number of elements in array

function twoNumberSum(array, targetSum) {
    // Write your code here.
    const hashT = {};
    for (let i=0; i<array.length; i++) {
        if (hashT[array[i]] != null) {
            return [array[i], hashT[array[i]]];
        } else {
            const diff = targetSum - array[i];
            hashT[diff] = array[i];
        }
    }
    return [];
}
  