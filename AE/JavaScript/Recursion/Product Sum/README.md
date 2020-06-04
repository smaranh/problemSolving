# Nth Fibonacci

## Problem
Write a function that takes in a "special" array and returns it's product sum. A special array is a non-empty array that contains integers and other special arrays. The product sum of a special array is the sum of it's elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.

### Sample
```
array = [1,2,3]
Output - 6

array = [1,[2,3]]
Output - 11 // 1+2*(2+3)
```