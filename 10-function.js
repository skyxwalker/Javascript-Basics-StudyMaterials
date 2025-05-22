//functions in JavaScript
// A function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Inside the parentheses, you can add parameters. Parameters are variables listed inside the parentheses () in the function definition.

//basic function
function greet() {
    console.log("Hello world!");
}   

//call the function
greet(); // Output: Hello world!


//functions are of 4 types
// function with no parameters and no return value
function Sample() {
    console.log("Sample function");
}
Sample(); // Output: Sample function

// function with no parameters and return value
function Sample1() {
    return "Sample function with return value";
}
str=Sample1();
console.log(str); // Output: Sample function with return value

// function with parameters and no return value
function Sample2(name) {
    console.log("Sample function with parameter: " + name);
}
Sample2("John"); // Output: Sample function with parameter: John

// function with parameters and return value
function Sample3(name) {
    return "Sample function with parameter: " + name;
}
str=Sample3("John");
console.log(str); // Output: Sample function with parameter: John

// function with default parameters
function Sample4(name="John") {
    return "Sample function with default parameter: " + name;
}
str=Sample4();
console.log(str); // Output: Sample function with default parameter: John
str=Sample4("Mike");
console.log(str); // Output: Sample function with default parameter: Mike


// functions to perform addition, subtraction, multiplication and division all in one function
function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b !== 0) {
                return a / b;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operation";
    }
}
// Example usage
let result1 = calculate(10, 5, 'add');
console.log(result1); // Output: 15
let result2 = calculate(10, 5, 'subtract');
console.log(result2); // Output: 5
let result3 = calculate(10, 5, 'multiply');
console.log(result3); // Output: 50
let result4 = calculate(10, 5, 'divide');
console.log(result4); // Output: 2
let result5 = calculate(10, 0, 'divide');
console.log(result5); // Output: Cannot divide by zero
let result6 = calculate(10, 5, 'modulus');
console.log(result6); // Output: Invalid operation


//new way of writing functions

// Arrow functions
// Arrow functions are a more concise way to write function expressions in JavaScript.
// They are anonymous and change the way this binds in functions.
// Arrow functions are always anonymous.
// They do not have their own this context, so they are not suitable for methods that need to access the object they belong to.
// Arrow functions are not hoisted, so they cannot be called before they are defined.

const sum =()=>{
    console.log("arrow function");
}
sum(); // Output: arrow function

// Arrow function with parameters
const sum1=(a,b)=>{
    return a+b;
}
sum2=sum1(10,20);
console.log(sum2); // Output: 30