## Problem
Write a function that takes an Object as input that can contain nested key value pair and return the flattened Object prefixed with the .

### Sample
```
Input: 
const ind = {
  name: "John",
  info: {
    height: "6",
    age: 34
  }
};

Output: {
    ind_info_age: 34
    ind_info_height: "6"
    ind_name: "John"
}

```