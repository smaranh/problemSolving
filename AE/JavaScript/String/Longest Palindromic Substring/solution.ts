// O(N^2) time | O(1) space
function longestPalindromicSubstring(string) {
    // Write your code here.
    let palindromeSubstring = string[0];
    for (let i=1; i<string.length-1; i++) {
        let str = string[i];
        if (string[i-1] === string[i+1]) {
            str = expandSubString(string, i-1, i+1);
            if (str.length > palindromeSubstring.length) palindromeSubstring = str;
        }
        if (string[i] === string[i+1]) {
            str = expandSubString(string, i, i+1);
            if (str.length > palindromeSubstring.length) palindromeSubstring = str;
        }
    }
    return palindromeSubstring;
}

function expandSubString(string, leftF, rightF) {
    while (leftF-1 >= 0 || rightF+1 <string.length) {
        if (string[leftF-1] === string[rightF+1]) {
            leftF--;
            rightF++;
        } else {
            break;
        }
    }
    return string.slice(leftF, rightF+1);
}