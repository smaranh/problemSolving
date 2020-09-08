function flattenObj(obj, parentKeys, output) {
    output = output || {};
    parentKeys = parentKeys || '';
    for (let prop in obj) {
        if (typeof obj[prop] === "object") {
            flattenObj(obj[prop], `${parentKeys}_${prop.toString()}`, output);
        } else {
            const key = `ind${parentKeys}_${prop.toString()}`;
            output[key] = obj[prop];
        }
    }
    return output;
}