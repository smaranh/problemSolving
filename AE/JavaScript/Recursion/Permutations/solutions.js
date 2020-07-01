function getPermutations(array) {
// Write your code here.
    const permCombinations = [];
    if (array.length) {
        helperPerm(array, [], permCombinations);
    }
    return permCombinations;
}

function helperPerm(array, perm, permCombinations) {
    if (!array.length) {
        permCombinations.push(perm);
    } else {
        for (let i=0; i<array.length; i++) {
            const newArr = array.slice(0, i).concat(array.slice(i+1));
            const newPerm = perm.concat(array[i]);
            helperPerm(newArr, newPerm, permCombinations);
        }
    }
}