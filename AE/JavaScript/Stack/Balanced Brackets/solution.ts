// O(N) time - N is length of string
// O(N) space
function balancedBrackets(string) {
    // Write your code here.
    const openBrackets = ['[', '{', '('];
    const closedBrackets = [']', '}', ')'];
    const bracketsHash = {
        '[': ']',
        '{': '}',
        '(': ')',
    }
    const stack = [];
    for (let i=0; i<string.length; i++) {
        if (openBrackets.indexOf(string[i]) !== -1) {
            stack.push(string[i]);
        }
        if (closedBrackets.indexOf(string[i]) !== -1) {
            const lastBracket = stack.pop();
            if (!lastBracket || bracketsHash[lastBracket] !== string[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}