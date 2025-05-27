//objects in javascript
//objects are used to store multiple values in a single variable
let person1 = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person1);        // Output: { name: 'John', age: 30, city: 'New York' }

//accessing object properties
console.log(person1.name); // Output: John
console.log(person1["age"]); // Output: 30
console.log(person1.city); // Output: New York


// multiple objects in an array
let person = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Mike", age: 35, city: "Chicago" }
];
console.log(person[0]); // Output: Array of objects
console.log(person[1]); // Output: Array of objects
console.log(person[0].name); // Output: John    

//adding new properties to an object
person.country = "USA";
console.log(person); 

// modifying existing properties
person.age = 31;
console.log(person); 

//deleting properties from an object
delete person.city; 
console.log(person); 

//object methods
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getDetails: function() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};
console.log(car.getDetails()); // Output: Toyota Camry (2020)

//to print key and value in loop
for (let key in person) {
    console.log(key + ": " + person[key]);
}
