// | Array = collections of data in serialized manner | 0,1,2,3

let arr = [1, 2, 3]; // number[]
arr[0] = 2;
console.log(arr);
// 0,1,2
// agar is index ke andar me value nahi hai toh uski default undefined rahega
console.log(arr[3]); // undefined
// To insert a new value
arr[3] = 4;

console.log(arr);

// | Collections = arrays or object
// ? Collections ka datatype javascript ke andar object
// Objects | key value pair
// Arrays | serialized / index value pair | key = 0,1,2,3
let user = {
  name: "rohit",
  age: 18,
};

console.log(user.favorite); // undefined
user.favorite = "study";
console.log(user);
console.log(typeof user); // object
console.log(typeof arr); // object
