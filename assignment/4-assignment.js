
// 1. Write a program to check whether a number is prime or not.
let num;
num=7;
flag=0;
for (let i = 2; i < num; i++) {
    if (num%i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 1) {
    console.log("not prime");
}
else {
    console.log("prime");
}


// 2. Write a program to print Fibonacci series up to n terms.
let n = 10; 
let a = 0, b = 1, c;
console.log(a);
console.log(b);
for (let i = 2; i < n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}


// 3. Write a program to check whether a number is palindrome or not.
let m = 1234321;
let original = m;
let rev = 0;

while (m > 0) {
    let d = m % 10;
    rev = rev * 10 + d;
    m =Math.trunc( m / 10);
}

if (rev == original) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}

