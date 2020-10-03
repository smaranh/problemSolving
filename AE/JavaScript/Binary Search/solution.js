// Recursive Helper function
const bs = (ar, target, left, right) => {
    if (right <= left) return null;
    let mid = Math.floor((left + right) / 2);
    if (ar[mid] === target) return mid;
    if (ar[mid] > target) return bs(ar, target, left, mid);
    if (ar[mid] < target) return bs(ar, target, mid + 1, right);
}

// Recursive Binary Search
const recBinSearch = (arr, target) => {
    let left = 0, right = arr.length;
    return bs(arr, target, left, right);
}

// Iterative Binary Search
const itBinSearch = (arr, target) => {
    let left = 0, right = arr.length;
    let mid = Math.floor((left+right)/2);
    while (right > left) {
        if (arr[mid] === target) {
            return mid;
        } else if(arr[mid] > target) {
            right = mid;
        } else {
            left  = mid + 1;
        }
        mid = Math.floor((left+right)/2);
    }
    return null;
}

console.log(recBinSearch([1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94], 58));
console.log(itBinSearch([1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94], 94));