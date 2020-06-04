function productSum(array) {
// Write your code here.
    return recursiveSum(array, 1);
}

function recursiveSum(array, depth) {
    let sum = 0;
    let i = 0;
    while (array[i] != null) {
        const element = array[i];
        if (typeof element === "object"){
            sum += recursiveSum(element, depth+1);
        } else {
            sum += element;
        }
        i++;
    }
    return sum*depth;
}