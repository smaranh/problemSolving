function selectionSort(array) {
    // Write your code here.
    for (let i=0; i<array.length; i++) {
        const minValue = Math.min(...array.slice(i));
        const minValIndex = array.slice(i).indexOf(minValue) + i;
        [array[i], array[minValIndex]] = [array[minValIndex], array[i]];
    }
    return array;
}