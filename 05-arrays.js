// Arrays in JavaScript
console.log("Arrays in JavaScript");
let arr=[44,22,13,94,25,36,17,81,96,10];
console.log(arr);

//strings in array
console.log("Strings in Array");
let fruits=["apple","banana","orange","grape","mango"];
console.log(fruits);

//arrays in array
console.log("Arrays in Array");
let arr2=[1,2,3,[4,5,6],7,8,9];
console.log(arr2);

//array operations
// 1. Adding Elements
console.log("Adding Elements");
arr.push(100); // Adding element at the end
console.log(arr);
arr.unshift(200); // Adding element at the beginning    
console.log(arr);

// 2. Removing Elements
console.log("Removing Elements");
arr.pop(); // Removing last element
console.log(arr);
arr.shift(); // Removing first element
console.log(arr);

// 3. Slicing and Splicing
console.log("Slicing and Splicing");
let slicedArr = arr.slice(2, 5); // Slicing elements from index 2 to 4
console.log(slicedArr);
arr.splice(2, 2, 300, 400); // Splicing elements from index 2 and replacing with new elements
console.log(arr);

// 4. Finding Elements  
console.log("Finding Elements");
let index = arr.indexOf(94); // Finding index of an element
console.log(index);
let includes = arr.includes(25); // Checking if an element exists
console.log(includes);
arr.sort((a, b) => b - a); // Sorting elements in descending order
console.log(arr);

// 5. Reversing Elements
console.log("Reversing Elements");
arr.reverse(); // Reversing the order of elements
console.log(arr);

// 6.sorting elements
console.log("Sorting in ascending order");
let arr4 = [4, 2, 1, 4, 5, 6, 7, 8, 9, 0];
arr4.sort(); // Sorting elements in ascending order
console.log(arr4);
// sorting funcion only helps in sorting same type of elements but it will not work if there is a mix of 2 digit and 3 digit numbers in the array eg try let arr = [44, 22, 13, 94, 25, 36, 17, 81, 96, 10];

//Methods for Accessing Elements
// 1. Accessing Elements
console.log("Accessing Elements");
console.log(arr[0]); // Accessing first element
console.log(arr[5]); // Accessing sixth element
console.log(arr[arr.length-1]); // Accessing last element

// 2. Looping through Elements
console.log("Looping through Elements");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Looping through elements using for loop
}


arr.forEach((element) => {
    console.log(element); // Looping through elements using forEach
});

//3.using splice method to insert and remove elements 
console.log("Using splice method to insert and remove elements");
arr.splice(2, 0, 500); // Inserting 500 at index 2
console.log(arr);

arr.splice(4, 1); // Removing 5th element
console.log(arr);


//reversing an array using unshift method and map method
console.log("Reversing an array using unshift method and map method");
let arrr=[1,2,3,4,5];
let ar=[];
arrr.map((item) => {
    ar.unshift(item ); 
});
console.log( ar); 














