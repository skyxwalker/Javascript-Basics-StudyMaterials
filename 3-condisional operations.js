//condisional statements
//simple if statement
if (true) {
    console.log("this is true statement");
}

//if else statement
if (false) {
    console.log("this is true statement");
}
else {
    console.log("this is false statement");
}

//if else if statement
n=10;
if (n>10) {
    console.log("n is greater than 10");
}
else if (n<10) {
    console.log("n is less than 10");
}
else {
    console.log("n is equal to 10");
}

//switch case statement
switch (n) {
    case 1:
        console.log("n is 1");
        break;
    case 2:
        console.log("n is 2");
        break;
    case 3:
        console.log("n is 3");
        break;
    default:
        console.log("n is not 1, 2 or 3");
}

//nested if statement
if (n>0) {
    console.log("n is positive");
    if (n%2==0) {
        console.log("n is even");
    }
    else {
        console.log("n is odd");
    }
}   

//ternary operator
var result = (n>10) ? "n is greater than 10" : "n is less than or equal to 10";
console.log(result);
