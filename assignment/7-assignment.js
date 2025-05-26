//. Write a function to remove duplicates from an array.
let arr = [1, 2, 3, 4, 5, 1, 2, 3];

function removeDuplicates(arr){
let newarr = [];
for (let i = 0; i < arr.length; i++) {
    if (!newarr.includes(arr[i])) {
        newarr.push(arr[i]);
    }
}
console.log(newarr);
}
removeDuplicates(arr);
//. Write a function to check if a given number is a prime number.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
//· Write a function to reverse a string without using the built-in reverse() method.
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let revstr = reverseString("hello");
console.log(revstr);
//. Write a function that accepts a string as a parameter and returns the most frequent character in the string.

function findit(str){
    let charCount = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}
let d=findit("ashishjacobbenson");
console.log(d);
//· Write a function that accepts a sentence as a parameter and returns the word with the highest number of vowels.
function findWordWithMostVowels(sentence) {
    const words = sentence.split(" ");
    let maxVowelCount = 0;
    let wordWithMostVowels = "";

    for (let word of words) {
        const vowelCount = (word.match(/[aeiou]/gi) || []).length;
        if (vowelCount > maxVowelCount) {
            maxVowelCount = vowelCount;
            wordWithMostVowels = word;
        }
    }
    return wordWithMostVowels;
}
let sentence = "This is a sample sentence with some vowels";
let word = findWordWithMostVowels(sentence);

//. Write a function to find the second smallest element in an array of numbers.
function secondSmallest(arr) {
    let first = arr[0];
    let second = arr.max;

    for (let num of arr) {
        if (num < first) {
            second = first;
            first = num;
        } else if (num < second && num !== first) {
            second = num;
        }
    }
    return second;
}
let arr1 = [1, 1, 4, 1, 5, 9];
let secondSmall = secondSmallest(arr1);
console.log(secondSmall);