// Brute Force method

function squareRoot(n) {
    if (!n) return new Error("Invalid Input");
    let ans = null;
    for (let i=1; i<=n; i++) {
        if (i*i === n) {
            ans = i;
            break;
        } else if (i*i < n) {
            ans = i;
        } else if(i*i > n) {
            break;
        }
    }
    return ans;
}

// BST

function squareRoot(n) {
    if (!n) return new Error("Invalid Input");
    let ans = null;
    let leftFlag = 1; let rightFlag = n;
    while (leftFlag <= rightFlag) {
        const mid = Math.floor((leftFlag + rightFlag) / 2);
        if (mid === (n/mid)) {
            ans = mid;
            break;
        } else if (mid < (n/mid)) {
            ans = mid
            leftFlag = mid + 1;
        } else if (mid > (n/mid)) {
            rightFlag = mid - 1;
        }
    }
    return ans;
}