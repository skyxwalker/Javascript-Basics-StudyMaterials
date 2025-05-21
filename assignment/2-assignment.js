//program to print numbers from 10 to 1
for(let i=10;i>0;i--){
    console.log(i);
}

//program to print even numbers from 1 to 20
console.log("");
for(let i=1;i<20;i++){
    if(i%2==0){
        console.log(i);
    }
}

//program to print sum of first n numbers
console.log("");
let n=20
let sum=0
for(let i=1;i<n;i++){
    sum=sum+i;
}
console.log(sum);

//program to print factorial of a number
console.log("");
let m=5;
let fact=1;
for(let i=1;i<=m;i++){
    fact=fact*i;
}
console.log(fact);
