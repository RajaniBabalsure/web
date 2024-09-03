// | Filter method use karke check karna hai ki value 10 se divisible hai kya
let arr = [1, 12, 30, 58, 100, 102, 105, 207, 500]; // random number array
// [30,100,500]

// variable = value
// function = definition

const checkDivisibleBy10 = (number) /* 28, 30 */ => {
  let condition = number % 15 == 0; // 28 / 10 = 8 , 30 / 10 = 0
  return condition;
};

console.log(arr.filter(checkDivisibleBy10));
