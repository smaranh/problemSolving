function getNthFib(n) {
    // Write your code here.
    return nthFib(n);
}

function nthFib(n) {
    if (n===1) return 0;
    if (n===2) return 1;
    return nthFib(n-1) + nthFib(n-2);
}