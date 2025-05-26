//exeptional handling

// Example of exception handling in JavaScript without functions
try {
    // Simulating an error
    let result = 10 / 0; // This will not throw an error, but let's say we want to check for division by zero
    if (result === Infinity) {
        throw new Error("Division by zero is not allowed.");
    }
} catch (error) {
    console.error("An error occurred:", error.message);
}


// Example of exception handling in JavaScript with functions
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // This will throw an error
} catch (error) {
    console.error("An error occurred:", error.message);
}
// Output:
// An error occurred: Division by zero is not allowed.