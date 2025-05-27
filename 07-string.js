let str1="Hello";
let str2="World";
let str3="!";

const combinedString = str1 + " " + str2 + str3;
console.log(combinedString); // Output: Hello World!


// String Methods
// 1. Length of a String
console.log("-length of the string");
const str = "Hello World!";
console.log("Length of the string:", str.length); // Output: 12

// 2. Concatenation
console.log("-Concatenation");
let strA = str1.concat(str2, str3);
console.log("Concatenated string:", strA); // Output: HelloWorld!

// 3. Accessing Characters
console.log("-Accessing Characters");
console.log("First character:", str.charAt(0)); // Output: H
console.log("Last character:", str.charAt(str.length - 1)); // Output: !

// 4.uppercase and lowercase
console.log("-to uppercase and lowercase");
console.log("Uppercase:", str.toUpperCase()); // Output: HELLO WORLD!
console.log("Lowercase:", str.toLowerCase()); // Output: hello world!

// 5. Substring
console.log("-Substring");
console.log("Substring:", str.substring(0, 5)); // Output: Hello
console.log("Substring:", str.substr(0, 5)); // Output: Hello   
console.log("Substring:", str.slice(0, 5)); // Output: Hello
console.log("Substring:", str.slice(-6)); // Output: World!

// 6. Splitting a String
console.log("-Splitting a String");
let str4 = "Hello,World!";
let arr = str4.split(","); // Splitting by comma
console.log("Split string:", arr); // Output: [ 'Hello', 'World!' ]
let arr2 = str4.split(""); // Splitting into characters
console.log("Split string:", arr2); // Output: [ 'H', 'e', 'l', 'l', 'o', ',', 'W', 'o', 'r', 'l', 'd', '!' ]

// 7. Replacing a String
console.log("-Replacing a String");
let str5 = "Hello World!";
let newStr = str5.replace("World", "JavaScript");
console.log("Replaced string:", newStr); // Output: Hello JavaScript!

// 8. finding index of a string
console.log("-Finding index of a string");
let str6 = "Hello World!";
let index = str6.indexOf("World");
console.log("Index of 'World':", index); // Output: 6
let lastIndex = str6.lastIndexOf("o");
console.log("Last index of 'o':", lastIndex); // Output: 7

// 9. Trimming a String
console.log("-Trimming a String");
let str7 = "   Hello World!   ";
let trimmedStr = str7.trim();
console.log("Trimmed string:", trimmedStr); // Output: Hello World!

// 10. Checking if a String Starts or Ends with a Specific String
console.log("-Checking if a String Starts or Ends with a Specific String");
let str8 = "Hello World!";
console.log("Starts with 'Hello':", str8.startsWith("Hello")); // Output: true
console.log("Ends with 'World!':", str8.endsWith("World!")); // Output: true

// 11. Checking if a String Contains a Specific String
console.log("-Checking if a String Contains a Specific String");
let str9 = "Hello World!";
console.log("Contains 'World':", str9.includes("World")); // Output: true
console.log("Contains 'JavaScript':", str9.includes("JavaScript")); // Output: false

// 12. Repeating a String
console.log("-Repeating a String");
let str10 = "Hello";
let repeatedStr = str10.repeat(3);  
console.log("Repeated string:", repeatedStr); // Output: HelloHelloHello

