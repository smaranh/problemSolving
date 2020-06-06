function findThreeLargestNumbers(array) {
    // Write your code here.
    let result = array.slice(0,3).sort((a,b) => a - b);
    for (let i=3; i<array.length; i++) {
        const value = array[i];
        if (value > result[2]) {
            [result[0], result[1]] = [result[1], result[0]];
            [result[2], result[1]] = [result[1], result[2]];
            result[2] = value;
        } else if (value > result[1]) {
            [result[0], result[1]] = [result[1], result[0]];
            result[1] = value;
        } else if (value > result[0]) {
            result[0] = value;
        }
    }
    return result;
}  