//pointers
let arr = [1, 2, 3, 4, 5];
let arr2 = arr;     // arr2 points to the same array as arr
arr2.push(6);       // Modifying arr2 will also modify arr
console.log(arr);   // [1, 2, 3, 4, 5]
console.log(arr2);  // [1, 2, 3, 4, 5]

