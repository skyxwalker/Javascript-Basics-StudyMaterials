# JavaScript Strings - Complete Guide

## What are Strings?

Strings are sequences of characters used to represent text in JavaScript. They are one of the primitive data types and are immutable (cannot be changed directly).

## String Creation

### Different Ways to Create Strings:

```javascript
// Using double quotes
let message1 = "Hello, World!";

// Using single quotes
let message2 = 'JavaScript is awesome!';

// Using template literals (backticks)
let message3 = `Welcome to JavaScript learning!`;

// Using String constructor (not recommended)
let message4 = new String("Constructor string");
```

### Escaping Characters:
```javascript
// Escape sequences
let text = "She said, \"JavaScript is fun!\"";
let path = "C:\\Users\\Documents\\file.txt";
let newLine = "First line\nSecond line";
let tab = "Column1\tColumn2";

console.log(text);    // She said, "JavaScript is fun!"
console.log(newLine); 
// First line
// Second line
```

### Common Escape Sequences:
- `\"` - Double quote
- `\'` - Single quote
- `\\` - Backslash
- `\n` - New line
- `\t` - Tab
- `\r` - Carriage return

## Template Literals (ES6+)

Template literals provide powerful string interpolation and multi-line capabilities:

```javascript
let name = "Alice";
let age = 25;
let city = "New York";

// String interpolation
let introduction = `Hi, I'm ${name}, I'm ${age} years old, and I live in ${city}.`;
console.log(introduction);

// Multi-line strings
let htmlTemplate = `
<div>
    <h1>Welcome ${name}!</h1>
    <p>You are ${age} years old.</p>
</div>
`;

// Expressions inside template literals
let a = 10;
let b = 20;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // The sum of 10 and 20 is 30.
```

## String Properties

### Length Property:
```javascript
let text = "JavaScript";
console.log(text.length); // 10

let emptyString = "";
console.log(emptyString.length); // 0
```

## String Methods

### Accessing Characters:
```javascript
let word = "JavaScript";

// Using bracket notation
console.log(word[0]);        // "J"
console.log(word[4]);        // "S"
console.log(word[word.length - 1]); // "t"

// Using charAt() method
console.log(word.charAt(0)); // "J"
console.log(word.charAt(4)); // "S"

// Character code
console.log(word.charCodeAt(0)); // 74 (ASCII code for 'J')
```

### Case Conversion:
```javascript
let text = "JavaScript Programming";

console.log(text.toLowerCase());  // "javascript programming"
console.log(text.toUpperCase());  // "JAVASCRIPT PROGRAMMING"

// Original string remains unchanged
console.log(text); // "JavaScript Programming"
```

### Searching and Finding:
```javascript
let sentence = "JavaScript is a powerful programming language";

// indexOf() - finds first occurrence
console.log(sentence.indexOf("a"));           // 1
console.log(sentence.indexOf("Script"));      // 4
console.log(sentence.indexOf("Python"));      // -1 (not found)

// lastIndexOf() - finds last occurrence
console.log(sentence.lastIndexOf("a"));       // 38

// includes() - checks if string contains substring
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python"));     // false

// startsWith() and endsWith()
console.log(sentence.startsWith("Java"));     // true
console.log(sentence.endsWith("language"));   // true

// search() - similar to indexOf but works with regex
console.log(sentence.search("powerful"));     // 17
```

### Extracting Parts of Strings:

#### slice() Method:
```javascript
let text = "JavaScript Programming";

console.log(text.slice(0, 10));   // "JavaScript"
console.log(text.slice(11));      // "Programming"
console.log(text.slice(-11));     // "Programming" (from end)
console.log(text.slice(-11, -1)); // "Programmin"
```

#### substring() Method:
```javascript
let text = "JavaScript Programming";

console.log(text.substring(0, 10)); // "JavaScript"
console.log(text.substring(11));    // "Programming"
// Note: substring() doesn't accept negative indices
```

#### substr() Method (Deprecated):
```javascript
let text = "JavaScript Programming";

console.log(text.substr(0, 10));  // "JavaScript"
console.log(text.substr(11, 7));  // "Program"
```

### Replacing Content:
```javascript
let text = "JavaScript is fun. JavaScript is powerful.";

// replace() - replaces first occurrence
let newText1 = text.replace("JavaScript", "Python");
console.log(newText1); // "Python is fun. JavaScript is powerful."

// replaceAll() - replaces all occurrences (ES2021)
let newText2 = text.replaceAll("JavaScript", "Python");
console.log(newText2); // "Python is fun. Python is powerful."

// Using regex for global replacement
let newText3 = text.replace(/JavaScript/g, "Python");
console.log(newText3); // "Python is fun. Python is powerful."

// Case-insensitive replacement
let text2 = "JAVASCRIPT is fun. javascript is powerful.";
let newText4 = text2.replace(/javascript/gi, "Python");
console.log(newText4); // "Python is fun. Python is powerful."
```

### Splitting Strings:
```javascript
let sentence = "apple,banana,orange,grape";
let fruits = sentence.split(",");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

let text = "JavaScript is awesome";
let words = text.split(" ");
console.log(words); // ["JavaScript", "is", "awesome"]

// Split with limit
let limitedSplit = sentence.split(",", 2);
console.log(limitedSplit); // ["apple", "banana"]

// Split into characters
let word = "Hello";
let characters = word.split("");
console.log(characters); // ["H", "e", "l", "l", "o"]
```

### Trimming Whitespace:
```javascript
let text = "   Hello World   ";

console.log(text.trim());      // "Hello World"
console.log(text.trimStart()); // "Hello World   "
console.log(text.trimEnd());   // "   Hello World"

// Alternative names
console.log(text.trimLeft());  // "Hello World   "
console.log(text.trimRight()); // "   Hello World"
```

### Padding Strings:
```javascript
let text = "5";

// padStart() - pads at the beginning
console.log(text.padStart(3, "0")); // "005"
console.log(text.padStart(3));      // "  5" (default space)

// padEnd() - pads at the end
console.log(text.padEnd(3, "0"));   // "500"
console.log(text.padEnd(3));        // "5  "
```

### Other Useful Methods:
```javascript
let text = "JavaScript";

// repeat() - repeats string
console.log("Ha".repeat(3)); // "HaHaHa"

// concat() - joins strings
let greeting = "Hello".concat(" ", "World", "!");
console.log(greeting); // "Hello World!"

// Better to use template literals or + operator
let betterGreeting = "Hello" + " " + "World" + "!";
let bestGreeting = `Hello World!`;
```

## String Comparison

```javascript
let str1 = "apple";
let str2 = "banana";
let str3 = "Apple";

// Alphabetical comparison
console.log(str1 < str2);   // true
console.log(str1 > str2);   // false

// Case-sensitive comparison
console.log(str1 === str3); // false
console.log(str1.toLowerCase() === str3.toLowerCase()); // true

// localeCompare() for proper sorting
console.log(str1.localeCompare(str2)); // -1 (str1 comes before str2)
console.log(str2.localeCompare(str1)); // 1 (str2 comes after str1)
console.log(str1.localeCompare(str1)); // 0 (equal)
```

## Regular Expressions with Strings

```javascript
let text = "The year 2024 is almost over, and 2025 is coming!";

// match() - finds matches
let years = text.match(/\d{4}/g);
console.log(years); // ["2024", "2025"]

// test() with regex
let hasNumbers = /\d/.test(text);
console.log(hasNumbers); // true

// replace with regex
let noNumbers = text.replace(/\d{4}/g, "YEAR");
console.log(noNumbers); // "The year YEAR is almost over, and YEAR is coming!"
```

## Practical Examples

### Example 1: Email Validation
```javascript
function isValidEmail(email) {
    return email.includes("@") && 
           email.includes(".") && 
           email.indexOf("@") > 0 && 
           email.lastIndexOf(".") > email.indexOf("@");
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid.email"));    // false
```

### Example 2: Title Case Converter
```javascript
function toTitleCase(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" ");
}

console.log(toTitleCase("hello world")); // "Hello World"
console.log(toTitleCase("JAVASCRIPT programming")); // "Javascript Programming"
```

### Example 3: Word Count
```javascript
function countWords(text) {
    return text.trim().split(/\s+/).length;
}

console.log(countWords("Hello world")); // 2
console.log(countWords("JavaScript   is    awesome")); // 3
```

### Example 4: Palindrome Checker
```javascript
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("race a car")); // false
```

### Example 5: URL Slug Generator
```javascript
function createSlug(title) {
    return title.toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$/g, "");
}

console.log(createSlug("Hello World! This is a Test.")); // "hello-world-this-is-a-test"
```

## String Immutability

Remember that strings in JavaScript are immutable:

```javascript
let original = "Hello";
let modified = original.toUpperCase();

console.log(original); // "Hello" (unchanged)
console.log(modified); // "HELLO" (new string)

// This doesn't change the original string
original.toUpperCase();
console.log(original); // Still "Hello"
```

## Best Practices

1. **Use template literals** for string interpolation and multi-line strings
2. **Use `const`** for strings that won't change
3. **Chain methods** when possible for cleaner code
4. **Use appropriate methods** for the task (e.g., `includes()` vs `indexOf()`)
5. **Consider performance** for large strings or frequent operations
6. **Validate input** when working with user-provided strings

## Summary

In this section, you learned:
- How to create and work with strings
- Template literals for modern string handling
- Essential string methods for manipulation and searching
- Regular expressions with strings
- Practical examples and best practices
- String immutability concept

Next, we'll explore arrays, which are used to store multiple values in a single variable.
