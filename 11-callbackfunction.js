//call back function
const fun1 = (param) =>{
    param();
    console.log("Hello world!");
}
const fun2 = () => {
    console.log("haiii world!");
}

fun1(fun2);

//normal way of printing array elements
const arr=[1,2,3,4];
for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

// new way using callback function
arr.map((item)=>{
    console.log(item);
})

// using callback function to copy the array elements to a new array and add 2 to each element
const newarr= arr.map((item)=>{
    return item+2;
});
console.log(newarr);

// using callback function to use filter method to filter the array elements
const nearr = arr.filter((item)=>{
    return item;
});
console.log(nearr);

const arrnew = arr.filter((item)=>{
    if(item%2==0){
        return item;
    }
});
console.log(arrnew);

//for each function with arrow function
arr.forEach((item)=>{
    console.log(item);
})


//important note
const newarr1 = arr.forEach((item)=>{
    return item;
});
console.log(newarr1); // Output: undefined
// forEach does not return anything, it just executes the function for each element in the array...
// so if you want to return something, use map instead of forEach
// forEach is used to iterate over the array and perform some operation on each element

