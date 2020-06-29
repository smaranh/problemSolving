// O(n*(2^n)) time | O(n*(2^n)) space
function powerset(array) {
    // Write your code here.
      const result = [[]];
      for (i=0; i<array.length; i++) {
          createSubSets(result, array[i]);
      }
      return result;
  }
  
  function createSubSets(array, value) {
      for(let i=0; i<array.length; i++) {
          if (array[i].length === 1 && array[i][0] === value) break;
          array.push(array[i].concat(value));
      }
  }