//Q1.function to say hello to a name passed as parameter
let greet=(name)=>{
    console.log("hello good morning "+name);
}
greet("John");

//Q2.function to find the sum of two numbers

let sum=(a,b)=>{
    return a+b;
}
sum(10,20);

//Q3.function to find the are of rectangle
let calculatearea=(length,width)=>{
    return length*width;
}
let area=calculatearea(10,20);
console.log("Area of rectangle is "+area);

//Q4.function to print the full name
let getFullName=(firstName,lastName)=>{
    console.log("Full name is "+firstName+" "+lastName);
}
getFullName("ashish","jacob");

//Q5.function to check if a number is even or odd
let checkEvenOdd=(num)=>{
    if(num%2==0){
        console.log(num+" is even");
    }
    else{
        console.log(num+" is odd");
    }
}
checkEvenOdd(10);
checkEvenOdd(11);

//Q6.function to concatenate two strings
let concatenateStrings=(str1,str2)=>{
    return str1.concat(str2);
}
let str=concatenateStrings("Hello ","world");
console.log(str);

//Q7.callback function to find the sum of two numbers and pass the result to another function
let add=(a,b,param)=>{
    let sum=a+b;
    param(sum);
}
let display=(sum)=>{
    console.log("The sum is "+sum);
}
a=10;
b=20;
add(a,b,display);

//Q8.program to conver an array of string to uppercaseusing map()
let arr=["hello","world","good","morning"];
let upperCaseArr=arr.map((item)=>{
    return item.toUpperCase();
});
console.log(upperCaseArr);

//Q9.program that extracts the length of strings in an array using map()
let arr1=["hello","world","good","morning"];
let lengthArr=arr1.map((item)=>{
    return item.length;
});
console.log(lengthArr);

//Q10.program to add prefix"hello" to each element in an array using map()
let arr2=["ashish","jerome","aby"]
let prefixArr=arr2.map((item)=>{
    return "hello "+item;
});
console.log(prefixArr);


