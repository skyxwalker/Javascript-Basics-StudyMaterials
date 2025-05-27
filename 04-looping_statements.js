//loops in javascript
// 1. For Loop

for (var i = 0; i < 5; i++) {
    console.log("For Loop: " + i);
}

// 2. While Loop

var j = 0;
while (j < 5) {
    console.log("While Loop: " + j);
    j++;
}

// 3. Do While Loop 
var k = 0;
do {
    console.log("Do While Loop: " + k);
    k++;
}
while (k < 5);

// 4. For In Loop
var obj = {a: 1, b: 2, c: 3};
for (var key in obj) {
    console.log("For In Loop: " + key + " = " + obj[key]);
}

// 5. For Of Loop
var arr = [1, 2, 3, 4, 5];
for (var value of arr) {
    console.log("For Of Loop: " + value);
}

// 6. ForEach Loop
arr.forEach(function(value, index) {
    console.log("For Each Loop: " + index + " = " + value);
});

// 7. Break and Continue
for (var l = 0; l < 5; l++) {
    if (l == 2) {
        continue; // Skip the iteration when l is 2
    }
    console.log("Break and Continue: " + l);
}

// 8. Nested Loops
for (var m = 0; m < 3; m++) {
    for (var n = 0; n < 2; n++) {
        console.log("Nested Loop: " + m + ", " + n);
    }
}           

// 9. Labelled Loops
outerLoop: for (var o = 0; o < 3; o++) {
    for (var p = 0; p < 3; p++) {
        if (p == 1) {
            break outerLoop; // Break out of the outer loop
        }
        console.log("Labelled Loop: " + o + ", " + p);
    }
}
