let a = 2;
let add = (num) /* parameters */ => {
  //   console.log(a + 2); // console.log(2+2)
  console.log(num); // agar function me input pass nahi kiya par woh expect kar raha hai to woh value undefined ho jayegi
  return num + 2;
};

add([1, 2, 3]);
console.log(add); // 2
// variable = value
// function = definition
console.log(add());
let sum = add(2); // 4

// Return matlab output | parameter matlab input
let numSqr = (number) => {
  return number * number;
};
console.log(numSqr(13)); //169

//? Practice Set | input me array aur andar ka maximum value kiska hai
// [1, 2, 3, 4, 5] => 5
// [12, 2, 13, 4, 5] => 13

let giveMax = (arr) /* arr = [12, 2, 13, 4, 5] */ => {
  let max = arr[0]; // 12
  for (const element of arr) {
    // element = 12 , 2 , 13 , 4, 5
    if (max < element) {
      // max = 12 < 12, 12 < 2 , 12 < 13 , 13 < 4 , 13 < 5
      max = element; // max = 13
    }
  }
  console.log("The Maximum element is:" + max); // 13
};
giveMax([12, 2, 13, 4, 5]);
giveMax([12, 25, 13, 4, 5]);
giveMax([1, 2, 3, 4, 5]);

let giveMin = (arr) => {
  let min = arr[0];
  for (const element of arr) {
    if (min > element) {
      min = element;
    }
  }
  console.log("The Minimum element is:" + min); // num + string , 1 + "hi" = "1hi"
};
giveMin([12, 25, 13, 4, 5]);


