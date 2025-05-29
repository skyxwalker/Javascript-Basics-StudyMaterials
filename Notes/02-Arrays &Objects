# JavaScript - Arrays & Objects 

## Arrays in JavaScript

Arrays are ordered collections of elements that can store multiple values in a single variable. They are one of the most important data structures in JavaScript.

### Creating Arrays

```javascript
// Array literal (recommended)
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, null];

// Array constructor
let emptyArray = new Array();
let sizedArray = new Array(5); // Creates array with 5 empty slots
let constructorArray = new Array("a", "b", "c");

// Empty array
let empty = [];
```

### Accessing Array Elements

```javascript
let colors = ["red", "green", "blue", "yellow"];

// Accessing by index (0-based)
console.log(colors[0]);  // "red"
console.log(colors[2]);  // "blue"
console.log(colors[10]); // undefined

// Getting array length
console.log(colors.length); // 4

// Last element
console.log(colors[colors.length - 1]); // "yellow"

// Using at() method (ES2022)
console.log(colors.at(0));   // "red"
console.log(colors.at(-1));  // "yellow" (last element)
console.log(colors.at(-2));  // "blue" (second to last)
```

### Modifying Arrays

```javascript
let fruits = ["apple", "banana"];

// Adding elements to the end
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

// Adding multiple elements
fruits.push("grape", "kiwi");
console.log(fruits); // ["apple", "banana", "orange", "grape", "kiwi"]

// Adding elements to the beginning
fruits.unshift("mango");
console.log(fruits); // ["mango", "apple", "banana", "orange", "grape", "kiwi"]

// Removing last element
let lastFruit = fruits.pop();
console.log(lastFruit); // "kiwi"
console.log(fruits);    // ["mango", "apple", "banana", "orange", "grape"]

// Removing first element
let firstFruit = fruits.shift();
console.log(firstFruit); // "mango"
console.log(fruits);     // ["apple", "banana", "orange", "grape"]

// Changing elements by index
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "orange", "grape"]
```

### Array Methods

#### Finding Elements:
```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// indexOf() - first occurrence
console.log(numbers.indexOf(4));    // 3
console.log(numbers.indexOf(10));   // -1 (not found)

// lastIndexOf() - last occurrence
console.log(numbers.lastIndexOf(4)); // 5

// includes() - check if element exists
console.log(numbers.includes(3));   // true
console.log(numbers.includes(10));  // false

// find() - first element that matches condition
let found = numbers.find(num => num > 3);
console.log(found); // 4

// findIndex() - index of first element that matches condition
let foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3
```

#### Transforming Arrays:
```javascript
let numbers = [1, 2, 3, 4, 5];

// map() - transform each element
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() - keep elements that match condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce() - reduce array to single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// reduce with objects
let words = ["hello", "world", "javascript"];
let wordLengths = words.reduce((acc, word) => {
    acc[word] = word.length;
    return acc;
}, {});
console.log(wordLengths); // {hello: 5, world: 5, javascript: 10}
```

#### Sorting and Reversing:
```javascript
let fruits = ["banana", "apple", "orange", "grape"];
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// sort() - modifies original array
fruits.sort();
console.log(fruits); // ["apple", "banana", "grape", "orange"]

// Sorting numbers (important!)
numbers.sort(); // Wrong way - treats as strings
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9] - accidentally correct

let moreNumbers = [10, 5, 20, 1];
moreNumbers.sort(); // Wrong!
console.log(moreNumbers); // [1, 10, 20, 5] - incorrect

// Correct way to sort numbers
moreNumbers.sort((a, b) => a - b); // Ascending
console.log(moreNumbers); // [1, 5, 10, 20]

moreNumbers.sort((a, b) => b - a); // Descending
console.log(moreNumbers); // [20, 10, 5, 1]

// reverse() - modifies original array
let reversed = [1, 2, 3, 4, 5];
reversed.reverse();
console.log(reversed); // [5, 4, 3, 2, 1]
```

#### Joining and Slicing:
```javascript
let fruits = ["apple", "banana", "orange", "grape"];

// join() - convert array to string
console.log(fruits.join());      // "apple,banana,orange,grape"
console.log(fruits.join(" - ")); // "apple - banana - orange - grape"
console.log(fruits.join(""));    // "applebananaorangegrape"

// slice() - extract portion (doesn't modify original)
console.log(fruits.slice(1, 3)); // ["banana", "orange"]
console.log(fruits.slice(2));    // ["orange", "grape"]
console.log(fruits.slice(-2));   // ["orange", "grape"]
console.log(fruits);             // Original unchanged

// splice() - add/remove elements (modifies original)
let colors = ["red", "green", "blue", "yellow"];

// Remove 2 elements starting at index 1
let removed = colors.splice(1, 2);
console.log(removed); // ["green", "blue"]
console.log(colors);  // ["red", "yellow"]

// Add elements at index 1
colors.splice(1, 0, "purple", "pink");
console.log(colors); // ["red", "purple", "pink", "yellow"]

// Replace elements
colors.splice(1, 2, "black", "white");
console.log(colors); // ["red", "black", "white", "yellow"]
```

#### Array Iteration:
```javascript
let fruits = ["apple", "banana", "orange"];

// forEach() - execute function for each element
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: orange

// for...of loop (modern way)
for (let fruit of fruits) {
    console.log(fruit);
}

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...in loop (gets indices)
for (let index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}
```

#### Array Testing:
```javascript
let numbers = [2, 4, 6, 8, 10];

// every() - test if all elements pass condition
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// some() - test if any element passes condition
let hasLargeNumber = numbers.some(num => num > 5);
console.log(hasLargeNumber); // true
```

### Multi-dimensional Arrays

```javascript
// 2D Array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // 6 (row 1, column 2)

// Iterating through 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Using nested forEach
matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
        console.log(`matrix[${i}][${j}] = ${cell}`);
    });
});
```

## Objects in JavaScript

Objects are collections of key-value pairs. They are the foundation of JavaScript and used to represent complex data structures.

### Creating Objects

```javascript
// Object literal (most common)
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isEmployed: true
};

// Object constructor
let person2 = new Object();
person2.name = "Jane Smith";
person2.age = 25;

// Empty object
let empty = {};
```

### Accessing Object Properties

```javascript
let person = {
    name: "Alice",
    age: 28,
    city: "Boston",
    "favorite color": "blue" // Property with spaces
};

// Dot notation
console.log(person.name); // "Alice"
console.log(person.age);  // 28

// Bracket notation
console.log(person["name"]); // "Alice"
console.log(person["favorite color"]); // "blue"

// Dynamic property access
let property = "city";
console.log(person[property]); // "Boston"

// Accessing non-existent property
console.log(person.height); // undefined
```

### Modifying Objects

```javascript
let person = {
    name: "John",
    age: 30
};

// Adding new properties
person.city = "New York";
person["country"] = "USA";

// Modifying existing properties
person.age = 31;
person["name"] = "John Doe";

// Deleting properties
delete person.city;

console.log(person); // {name: "John Doe", age: 31, country: "USA"}
```

### Object Methods

```javascript
let calculator = {
    x: 10,
    y: 5,
    
    // Method definition
    add: function() {
        return this.x + this.y;
    },
    
    // ES6 shorthand method syntax
    subtract() {
        return this.x - this.y;
    },
    
    // Arrow function (be careful with 'this')
    multiply: () => {
        // 'this' doesn't refer to the object in arrow functions
        return "Arrow function doesn't have proper 'this'";
    },
    
    // Method with parameters
    divide(a, b) {
        return a / b;
    }
};

console.log(calculator.add());       // 15
console.log(calculator.subtract());  // 5
console.log(calculator.divide(20, 4)); // 5
```

### Object Property Checking

```javascript
let person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

// Check if property exists
console.log("name" in person);        // true
console.log("height" in person);      // false

// hasOwnProperty() method
console.log(person.hasOwnProperty("name"));   // true
console.log(person.hasOwnProperty("height")); // false

// Getting all property names
console.log(Object.keys(person));     // ["name", "age", "city"]

// Getting all property values
console.log(Object.values(person));   // ["Alice", 25, "Boston"]

// Getting key-value pairs
console.log(Object.entries(person));  // [["name", "Alice"], ["age", 25], ["city", "Boston"]]
```

### Object Iteration

```javascript
let person = {
    name: "Bob",
    age: 35,
    profession: "Developer",
    city: "Seattle"
};

// for...in loop
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Using Object.keys()
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

// Using Object.entries()
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Using Object.values()
Object.values(person).forEach(value => {
    console.log(value);
});
```

### Nested Objects

```javascript
let company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105"
    },
    employees: [
        {
            name: "Alice Johnson",
            position: "Developer",
            salary: 95000,
            skills: ["JavaScript", "React", "Node.js"]
        },
        {
            name: "Bob Smith",
            position: "Designer",
            salary: 75000,
            skills: ["Photoshop", "Figma", "CSS"]
        }
    ],
    founded: 2015
};

// Accessing nested properties
console.log(company.address.city);           // "San Francisco"
console.log(company.employees[0].name);      // "Alice Johnson"
console.log(company.employees[0].skills[1]); // "React"

// Safe access using optional chaining (ES2020)
console.log(company.address?.country);       // undefined (no error)
console.log(company.employees[0]?.salary);   // 95000
```

### Object Copying

```javascript
let original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming"]
};

// Shallow copy methods
let copy1 = Object.assign({}, original);
let copy2 = {...original}; // Spread operator (ES6)

// Modifying shallow copy
copy1.name = "Jane";
copy1.hobbies.push("cooking"); // This affects both objects!

console.log(original.hobbies); // ["reading", "gaming", "cooking"]
console.log(copy1.hobbies);    // ["reading", "gaming", "cooking"]

// Deep copy (for simple objects)
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.hobbies.push("swimming");

console.log(original.hobbies); // ["reading", "gaming", "cooking"]
console.log(deepCopy.hobbies); // ["reading", "gaming", "cooking", "swimming"]
```

### Object Destructuring

```javascript
let person = {
    name: "Alice",
    age: 28,
    city: "Boston",
    profession: "Engineer"
};

// Basic destructuring
let {name, age} = person;
console.log(name); // "Alice"
console.log(age);  // 28

// Destructuring with different variable names
let {name: fullName, age: years} = person;
console.log(fullName); // "Alice"
console.log(years);    // 28

// Destructuring with default values
let {name, height = "Unknown"} = person;
console.log(height); // "Unknown"

// Nested destructuring
let employee = {
    name: "John",
    details: {
        position: "Manager",
        department: "Sales"
    }
};

let {name, details: {position}} = employee;
console.log(position); // "Manager"

// Function parameter destructuring
function displayPerson({name, age, city}) {
    console.log(`${name} is ${age} years old and lives in ${city}`);
}

displayPerson(person); // "Alice is 28 years old and lives in Boston"
```

## Advanced Array and Object Techniques

### Array Destructuring

```javascript
let colors = ["red", "green", "blue", "yellow"];

// Basic destructuring
let [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Skipping elements
let [primary, , tertiary] = colors;
console.log(primary);  // "red"
console.log(tertiary); // "blue"

// Rest operator
let [head, ...tail] = colors;
console.log(head); // "red"
console.log(tail); // ["green", "blue", "yellow"]

// Default values
let [a, b, c, d, e = "default"] = colors;
console.log(e); // "default"

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1
```

### Working with Arrays of Objects

```javascript
let students = [
    {name: "Alice", grade: 85, subject: "Math"},
    {name: "Bob", grade: 92, subject: "Science"},
    {name: "Charlie", grade: 78, subject: "Math"},
    {name: "Diana", grade: 96, subject: "Science"}
];

// Find student by name
let alice = students.find(student => student.name === "Alice");
console.log(alice); // {name: "Alice", grade: 85, subject: "Math"}

// Filter students by subject
let mathStudents = students.filter(student => student.subject === "Math");
console.log(mathStudents);

// Get all student names
let names = students.map(student => student.name);
console.log(names); // ["Alice", "Bob", "Charlie", "Diana"]

// Calculate average grade
let averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(averageGrade); // 87.75

// Sort by grade (descending)
let sortedByGrade = students.sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

// Group by subject
let groupedBySubject = students.reduce((groups, student) => {
    if (!groups[student.subject]) {
        groups[student.subject] = [];
    }
    groups[student.subject].push(student);
    return groups;
}, {});
console.log(groupedBySubject);
```

## Practical Examples

### Example 1: Shopping Cart
```javascript
let cart = {
    items: [],
    
    addItem(product, quantity = 1) {
        let existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({product, quantity});
        }
    },
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    },
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    },
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
};

// Usage
let laptop = {id: 1, name: "Laptop", price: 999.99};
let mouse = {id: 2, name: "Mouse", price: 29.99};

cart.addItem(laptop, 1);
cart.addItem(mouse, 2);

console.log(cart.getTotal());     // 1059.97
console.log(cart.getItemCount()); // 3
```

### Example 2: Contact Manager
```javascript
let contactManager = {
    contacts: [],
    
    addContact(name, email, phone) {
        let contact = {
            id: Date.now(),
            name,
            email,
            phone,
            createdAt: new Date()
        };
        this.contacts.push(contact);
        return contact;
    },
    
    findContact(searchTerm) {
        return this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },
    
    updateContact(id, updates) {
        let contactIndex = this.contacts.findIndex(contact => contact.id === id);
        if (contactIndex !== -1) {
            this.contacts[contactIndex] = {...this.contacts[contactIndex], ...updates};
            return this.contacts[contactIndex];
        }
        return null;
    },
    
    deleteContact(id) {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
    },
    
    getAllContacts() {
        return [...this.contacts]; // Return copy
    }
};

// Usage
contactManager.addContact("John Doe", "john@email.com", "123-456-7890");
contactManager.addContact("Jane Smith", "jane@email.com", "098-765-4321");

let results = contactManager.findContact("john");
console.log(results);
```

### Example 3: Data Analysis
```javascript
let salesData = [
    {product: "Laptop", category: "Electronics", price: 1200, quantity: 15},
    {product: "Phone", category: "Electronics", price: 800, quantity: 25},
    {product: "Shirt", category: "Clothing", price: 50, quantity: 100},
    {product: "Jeans", category: "Clothing", price: 80, quantity: 60},
    {product: "Book", category: "Education", price: 20, quantity: 200}
];

// Total revenue
let totalRevenue = salesData.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log(`Total Revenue: ${totalRevenue}`);

// Revenue by category
let revenueByCategory = salesData.reduce((categories, item) => {
    let revenue = item.price * item.quantity;
    categories[item.category] = (categories[item.category] || 0) + revenue;
    return categories;
}, {});
console.log("Revenue by Category:", revenueByCategory);

// Top selling products by quantity
let topProducts = salesData
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 3)
    .map(item => ({product: item.product, quantity: item.quantity}));
console.log("Top 3 Products by Quantity:", topProducts);

// Average price by category
let avgPriceByCategory = Object.entries(
    salesData.reduce((categories, item) => {
        if (!categories[item.category]) {
            categories[item.category] = {total: 0, count: 0};
        }
        categories[item.category].total += item.price;
        categories[item.category].count += 1;
        return categories;
    }, {})
).map(([category, data]) => ({
    category,
    averagePrice: data.total / data.count
}));

console.log("Average Price by Category:", avgPriceByCategory);
```

## Important Notes on References

### Arrays and Objects are Reference Types
```javascript
// Primitive values are copied
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (unchanged)

// Objects are referenced
let obj1 = {name: "John"};
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name); // "Jane" (changed!)

// Arrays are also referenced
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (changed!)
```

## Best Practices

### Arrays:
1. Use `const` for arrays that won't be reassigned
2. Use modern array methods (`map`, `filter`, `reduce`) over traditional loops
3. Be careful with mutating methods (`push`, `pop`, `sort`, `reverse`)
4. Use spread operator for copying arrays
5. Use meaningful variable names for array elements

### Objects:
1. Use `const` for objects that won't be reassigned
2. Use dot notation when possible, bracket notation when necessary
3. Use object destructuring for cleaner code
4. Be aware of shallow vs deep copying
5. Use meaningful property names

## Summary

In this section, you learned:
- How to create and manipulate arrays using various methods
- Array iteration techniques and functional programming concepts
- Object creation, property access, and modification
- Object methods and the `this` keyword
- Destructuring for both arrays and objects
- Working with nested data structures
- Practical examples combining arrays and objects
- Reference vs value concepts

Next, we'll explore conditional statements and control flow to make decisions in your code.
