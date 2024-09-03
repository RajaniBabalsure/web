//-- Arithmetic Operators
//? +  = 'Adds two number'
//? -  = "Subtracts two number"
//? * = 'Multiply two numbers'
//? / = 'Divide two numbers'
//? % = 'Divide two numbers and give the remainder'

// --  Priority level in Arithmetic Operators
//? B = Brackets
//? O = of
//? D = Division
//? M = Multiply
//? A = Add
//? S = Subtraction

// + in string | + will try to concatenate with other
console.log("1" + 2); // in string if there is one operand that is string then it will try to convert all in string

// -- Comparison operators | Boolean
// equal to = ==
// less than = <
// greater than = >
// not equal to = !=

console.log(1 ==1); // Booleans
console.log(1 < 2 ); // Booleans
console.log(1 > 2); // Booleans
console.log(1 !=2); // Booleans

// less than  or equal  to 

console.log(1 <=2); // Range =[2, 1, 0, -1, -2, ......- infinity]
console.log(1 <= 10); // Range =[10, 9 ,8 6,5,4,3,2,1,0, -1 , -2,.......... infinity]
console.log(1 >= 10);  // Range = [ 10 , 11 12, ...... infinity]
console.log(1 >=10); // true
console.log(11 <=10); //false


// Not operator = !
console.log("----------------");
// Empty values when trying to convert in boolean will give false
// number = 0
// string = ''
// boolean = false
// undefined = false
// null = false
console.log(Boolean(5)); // true
console.log(Boolean("Hello")) // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

console.log(!"Hello"); // false
console.log(!!2);

// Increment Operators
let a = 3;
console.log(a++); // 1 ; a = 2
console.log(a); // 2
console.log(++a); // a = 3 ; 3
a = 3;
console.log(a--); // 3 ; a = 2
console.log(a); // 2
console.log(--a); // a = 1 ; 1