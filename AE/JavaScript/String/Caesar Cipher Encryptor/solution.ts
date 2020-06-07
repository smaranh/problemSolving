function caesarCipherEncryptor(string, key) {
    // Write your code here.
    const firstCode = "a".charCodeAt(0);
    const lastCode = "z".charCodeAt(0);
    key = key%26;
    const unicodes = string.split('').map(char => {
        let charCode = char.charCodeAt(0);
        charCode += key;
        charCode = (charCode > lastCode) ? firstCode - 1 + charCode - lastCode : charCode;
        return charCode;
    });
    return String.fromCharCode(...unicodes);
}