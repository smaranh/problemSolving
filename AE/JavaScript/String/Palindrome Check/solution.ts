// O(N) time - N = length of string
// O(1) space
function isPalindrome(string) {
    // Write your code here.
    let reverseString = "";
    for (let c=string.length-1; c>=0; c--) {
        reverseString += string[c];
    }
    return string === reverseString;
}