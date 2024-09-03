//-- Functions | this are reusable block of code which we can call multiple times

//*syntax
//? function function_name() {
//?   // this curly bracket defines what to run when function is called
//? }

// var a = 1; // old time declaration
function name() {
    // old declaration
    // block of code
    let sum = 3 + 3; // 5
    let diff = 4 - 3; // -1
    console.log("Sum is:", sum);
    console.log("Diff is:", diff);
  }
  name(); // calling the function will the code given in the curly brackets
  
  // Arrow Function
  let greet = () => {
    console.log("hi");
  };
  greet();
  
  const greet2 = () => {
    console.log("Hello2");
  };
  greet = () => {};
  
  // Practice
  
  let arr = [1, 14, 25, 34];
  
  let giveAverage = () => {
    // Block
    let sum = 0;
    for (const element of arr) {
      sum += element;
    }
    // average = total of all elements / no of all elements
    let avg = sum / arr.length;
    console.log(avg);
  };
  giveAverage();
  
