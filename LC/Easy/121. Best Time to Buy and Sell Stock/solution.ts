/**
 * @param {number[]} prices
 * @return {number}
 */
// O(N) time | O(1) space
var maxProfit = function(prices) {
    let maxP = 0, lowP = prices[0];
    for (let i=1; i<prices.length; i++) {
        lowP = Math.min(prices[i-1], lowP);
        const diff = prices[i] - lowP;
        maxP = Math.max(diff, maxP);
    }
    return maxP;
};