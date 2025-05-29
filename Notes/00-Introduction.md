# JavaScript Basics - Introduction, Variables, Printing & Operations

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that is widely used for web development. It's the programming language of the web, allowing you to create interactive and dynamic websites.

### Key Features:
- **Interpreted Language**: No need to compile before running
- **Dynamic Typing**: Variables can hold different types of data
- **Client-Side & Server-Side**: Runs in browsers and on servers (Node.js)
- **Event-Driven**: Responds to user interactions

## Variables in JavaScript

Variables are containers that store data values. In JavaScript, you can declare variables using `var`, `let`, or `const`.

### Variable Declaration Keywords:

#### `let` - Block-scoped variable
```javascript
let age = 25;
let name = "John";
```

#### `const` - Constant (cannot be reassigned)
```javascript
const PI = 3.14159;
const country = "USA";
```

#### `var` - Function-scoped (older way, avoid in modern code)
```javascript
var oldStyle = "not recommended";
```

### Variable Naming Rules:
- Must start with a letter, underscore (_), or dollar sign ($)
- Can contain letters, numbers, underscores, and dollar signs
- Cannot use reserved keywords
- Case-sensitive

```javascript
// Valid variable names
let firstName = "Alice";
let _private = "hidden";
let $element = "selector";
let age2 = 30;

// Invalid variable names
// let 2age = 30;        // Cannot start with number
// let first-name = "";  // Cannot contain hyphens
// let let = "value";    // Cannot use reserved keywords
```

## Data Types

JavaScript has several data types:

### Primitive Types:
```javascript
// Number
let age = 25;
let price = 99.99;

// String
let name = "JavaScript";
let message = 'Hello World';

// Boolean
let isActive = true;
let isComplete = false;

// Undefined
let undefinedVar;
console.log(undefinedVar); // undefined

// Null
let emptyValue = null;

// Symbol (ES6+)
let symbol = Symbol('id');

// BigInt (for large integers)
let bigNumber = 123456789012345678901234567890n;
```

### Checking Data Types:
```javascript
let name = "John";
let age = 30;
let isStudent = true;

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
```

## Printing/Output in JavaScript

### Console Output:
```javascript
// Basic console output
console.log("Hello, World!");

// Multiple values
console.log("Name:", "John", "Age:", 25);

// Variables
let message = "Welcome to JavaScript!";
console.log(message);

// Other console methods
console.warn("This is a warning");
console.error("This is an error");
console.info("This is information");
```

### Template Literals (String Interpolation):
```javascript
let name = "Alice";
let age = 28;

// Template literal with backticks
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Multi-line strings
let multiLine = `
This is a
multi-line
string using
template literals.
`;
console.log(multiLine);
```

## Operators in JavaScript

### Arithmetic Operators:
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000

// Increment and Decrement
let count = 5;
count++;        // Post-increment: count becomes 6
++count;        // Pre-increment: count becomes 7
count--;        // Post-decrement: count becomes 6
--count;        // Pre-decrement: count becomes 5
```

### Assignment Operators:
```javascript
let x = 10;

x += 5;  // x = x + 5; (15)
x -= 3;  // x = x - 3; (12)
x *= 2;  // x = x * 2; (24)
x /= 4;  // x = x / 4; (6)
x %= 4;  // x = x % 4; (2)
```

### Comparison Operators:
```javascript
let a = 5;
let b = "5";

console.log(a == b);   // Equality (type coercion): true
console.log(a === b);  // Strict equality: false
console.log(a != b);   // Inequality: false
console.log(a !== b);  // Strict inequality: true
console.log(a > 3);    // Greater than: true
console.log(a < 10);   // Less than: true
console.log(a >= 5);   // Greater than or equal: true
console.log(a <= 5);   // Less than or equal: true
```

### Logical Operators:
```javascript
let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // AND: false
console.log(isAdult || hasLicense); // OR: true
console.log(!isAdult);              // NOT: false

// Short-circuit evaluation
let result = isAdult && "Can vote";
console.log(result); // "Can vote"

let defaultName = "" || "Anonymous";
console.log(defaultName); // "Anonymous"
```

### Type Conversion:
```javascript
// String to Number
let strNumber = "42";
let num1 = Number(strNumber);     // 42
let num2 = parseInt(strNumber);   // 42
let num3 = parseFloat("42.5");    // 42.5
let num4 = +strNumber;            // 42 (unary plus)

// Number to String
let number = 42;
let str1 = String(number);        // "42"
let str2 = number.toString();     // "42"
let str3 = number + "";           // "42"

// Boolean Conversion
let bool1 = Boolean(1);           // true
let bool2 = Boolean(0);           // false
let bool3 = Boolean("");          // false
let bool4 = Boolean("hello");     // true
```

## Practical Examples:

### Example 1: Simple Calculator
```javascript
let num1 = 15;
let num2 = 4;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
```

### Example 2: User Information
```javascript
const firstName = "John";
const lastName = "Doe";
let age = 30;
const isMarried = true;

console.log("User Profile:");
console.log(`Full Name: ${firstName} ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Marital Status: ${isMarried ? "Married" : "Single"}`);
```

### Example 3: Temperature Converter
```javascript
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
```

## Best Practices:

1. **Use `const` by default**, `let` when you need to reassign
2. **Avoid `var`** in modern JavaScript
3. **Use descriptive variable names**
4. **Use template literals** for string interpolation
5. **Be consistent with naming conventions** (camelCase)

## Summary:

In this introduction, you learned:
- How to declare variables using `let` and `const`
- Different data types in JavaScript
- How to output data using `console.log()`
- Various operators for arithmetic, comparison, and logical operations
- Type conversion between different data types

Next, we'll explore strings in detail, learning about string methods and manipulation techniques.
