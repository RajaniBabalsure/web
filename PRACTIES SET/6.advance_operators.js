// Assignment operator | Assigns the value to a variable
// = | to set the value in memory
let a = 5; // a is undefined , a = 5
a = 6; // a is set to 6 in memory

// Addition
a = a + 1; // take the previous value of a and add one then set it for new value of a | 7
a += 2; // a = a + 2 | 9

// Subtraction
a = a - 1; // 8
a -= 1; // 7

// Multiplication
a *= 10; // a = a * 10

// Division
a /= 10; // a = a / 10
console.log(a);

// Logical operators
let age = 19;
let isDriverId = true;

// And operator | this will check if both conditions are true | Saari condition true hogi toh true return karega
/* Truth Table 
 true && true = true
 true && false = false
 false && true = false
 false && false = false 
 */

console.log(age >= 21 && isDriverId == true); // Range is [18 , 19 ,20 ,.....]

// OR Operator | this will check if one or more conditions are true | Ek condition bhi true hogi toh true return karega
/* Truth Table 
 true || true = true
 true || false = true
 false || true = true
 false || false = false 
 */

console.log(age >= 18 || isDriverId == true);
