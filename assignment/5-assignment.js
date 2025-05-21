// 1. Write a program to print the following pattern:
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i=0; i<5; i++){
   console.log("* ".repeat(i));
}


// 2. Write a program to print the following pattern:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

for(let i=1; i<5; i++){
   console.log("  ".repeat(5-i) +"* ".repeat(i));

}

// 3. Write a program to print the following pattern:
//     *
//    ***
//   *****
//  *******
// *********

for (let i = 1; i <= 5; i++) {
   let stars = 2 * i - 1;
   let spaces = 5 - i;    
   console.log(" ".repeat(spaces) + "*".repeat(stars));
}

