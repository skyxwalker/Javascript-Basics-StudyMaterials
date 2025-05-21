//Destructuring of arrays and objects
// Destructuring is a convenient way of extracting values from arrays or properties from objects into distinct variables.
// It allows unpacking values from arrays or properties from objects into distinct variables.
// It allows unpacking values from arrays or properties from objects into distinct variables.

// Destructuring of arrays
let arr = [1, 2, 3];
let [a, b, c] = arr; // Destructuring the array
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Destructuring of objects
let obj = { id: "AD101", empname: "joe", age: 34, marks: [90, 75, 77, 89, 92] };
let { id, empname, age, marks } = obj; // Destructuring the object
console.log(id);
console.log(empname);
console.log(age);
console.log(marks);

