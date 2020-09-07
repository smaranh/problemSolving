
const flatten = (arr, output) => {
    output = output || [];
    if (Array.isArray(arr)) {
        for (let i=0; i<arr.length; i++) {
            flatten(arr[i], output);
        }
    } else {
        output.push(arr);
    }
    return output;
}