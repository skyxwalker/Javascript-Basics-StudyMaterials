// operations in javascript


// 1. Arithmetic Operators
console.log("Arithmetic Operators");
var a = 100;
var b = 200;
var c = a + b;
console.log("Addition: " , c);
var d = a - b;
console.log("Subtraction: " , d);
var e = a * b;
console.log("Multiplication: " , e);
var f = a / b;
console.log("Division: " , f);
var g = a % b;
console.log("Modulus: " , g);   


// 2. Assignment Operators
console.log("Assignment Operators");
var num1 = 10;
var num2 = 20;

num1 += num2; 
console.log("Addition : " , num1);
num1 -= num2;   
console.log("Subtraction : " , num1);
num1 *= num2;
console.log("Multiplication : " , num1);
num1 /= num2;
console.log("Division : " , num1);
num1 %= num2;
console.log("Modulus : " , num1);
// 3. Comparison Operators
console.log("Comparison Operators");
var x = 0;
var y = 1;
console.log("Equal to: " , x == y);
console.log("Not Equal to: " , x != y);
console.log("Strict Equal to: " , x === y);
console.log("Strict Not Equal to: " , x !== y);
console.log("Greater than: " , x > y);
console.log("Less than: " , x < y);
console.log("Greater than or Equal to: " , x >= y);
console.log("Less than or Equal to: " , x <= y);

// 4. Logical Operators
console.log("Logical Operators");
var a = true;
var b = false;  
console.log("Logical AND: " , a && b);
console.log("Logical OR: " , a || b);
console.log("Logical NOT: " , !a);

// 5. Ternary Operators
console.log("Ternary Operators");
var age = 21;
var result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(result);
