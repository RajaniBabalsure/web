//? FizzBuzz: Write a program which takes number from user. For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

let userInput = 20;
for (let i = 1; i <= userInput; i++) {
  if (i % 3 && i % 5 == 0) { // i =4 | 1
    console.log(i, "FizzBuzz");
  } else if (i % 5 == 0) {
    console.log(i, "Buzz");
  } else if (i % 3 == 0) console.log(i, "Fizz");
}
