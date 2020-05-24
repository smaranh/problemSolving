// O(N) time - N is num of elements in sequence
// O(1) space
function isValidSubsequence(array, sequence) {
	if (sequence.length > array.length) {
		return false;
	}
  // Write your code here.
	let arrayIdxTracker = 0;
	// loop thru each elem
	for (let i=0; i<sequence.length; i++) {
		const val = sequence[i];
		const subarray = array.slice(arrayIdxTracker);
		const idx = subarray.indexOf(val);
		if (idx === -1) {
			return false
		} else {
			if (idx + arrayIdxTracker >= arrayIdxTracker) {
				arrayIdxTracker = idx + arrayIdxTracker + 1;
			} else {
				return false;
			}
		}
	}
	return true;
}