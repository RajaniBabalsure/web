// -- Some more array methods

// | Sort Method = order by alphabetically
let arr = ["Banana", "Orange", "Apple", "Mango"]; // asc | desc
arr.sort(); // ['Apple','Banana','Mango','Orange']
console.log(arr);
let numArray = [1, 12, 112, 200012, 9, 34, 28]; // [1,9,12,21,34] // one
numArray.sort((a, b) => {
  return a - b; // 1 - 9 = -8
});
console.log(numArray);

// | Reverse method = ulta kar dega
numArray = [1, 2, 3, 4, 5, 6, 7, 8];
numArray.reverse();
console.log(numArray);

console.log("---------------------------------------");
// -- Iteration Methods on Array
// | Foreach method = takes a function as argument which has access to value , index and array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]; // each element ka square
arr2.forEach((value, index, array) => {
  array[index] = value * value;
});
console.log(arr2);
console.log("---------------------------------------");

// | Map method  takes a function as argument which has access to value , index and array |  return new value
arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray2 = arr2.map((value, index, array) => {
  //   console.log(value, index);
  return value * value;
});
console.log(newArray2);

// | Filter Method = phele tempArray banaega / har element ke andar condition | jidar condition true ho gayi use tempArray insert kar dega / tempArray ko return kar dega
arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

let newArray = arr2.filter((value, index, array) => {
  //   console.log(value, index);
  return value > 3;
});
console.log(newArray);
