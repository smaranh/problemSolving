// Suppose you are to write an IDE plugin whose purpose is to display (print) the class hierarchy of a project.
// Implement a function that prints this class hierarchy in pre-order (root, then rest). You can assume your function takes as input a List<Clazz>, where the Clazz type is defined as:
// Clazz = {
//   name: String,
//   parent: Clazz
// }

// Sample Input 1:
// [{name: "B", parent=A}, {name: "C", parent=A}, {name: "X1", parent=null}, {name: "E", parent=B}, {name: "D", parent=A}, {name: "A", parent=null}, {name: "F", parent=B}];

// Output: (2 valid outputs)
// ['A', 'B', 'E', 'F', 'C', 'D', 'X1']
// OR
// ['X1', 'A', 'B', 'E', 'F', 'C', 'D']