// O(N) time - N is n
// O(N) space - N is n
function getNthFib(n) {
// Write your code here.
    if (n === 0) return null;
    const index = {
        1: 0,
        2: 1
    }
    return nthFib(n, index);
}

function nthFib(n, index) {
    let i = 3;
    while (index[n] == null) {
        index[i] = index[i-1] + index[i-2];
        i++;
    }
    return index[n];
}  