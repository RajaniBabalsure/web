// -- Built in functions of array is called array methods
// ? Length = size | no of elements
let arr = [1, 2, 3];
console.log(arr.length);

//? Push method = adds a new element
arr.push("string");
[1, 2, 3, "string"];
arr.push("new value");
console.log(arr); // [1, 2, 3,'string','new value']

//? Pop method = removes the last element
arr.pop();
console.log(arr);

//? shift method = remove first element in array
console.log(arr);
arr.shift();
console.log(arr);

// ? unshift methods = adds the element in first place
arr.unshift(5);
console.log(arr);

// | String like built in function
// ? Slice method
("shri"); // second element =1 , last element = 5
console.log("shri".slice(1, 5)); // 'dity'
arr = ["e", "f", "g", "h", "i", "j"];
console.log(arr); // 6
console.log(arr.slice(1, 5)); // range [ 0 , 8 ) = [0,1,2,3,4,5,6,7]

// ? At method = returns the value at that index
console.log(arr.at(5));

// ? Concat method = returns a new array by adding the all array
let arr1 = [5, 6, 7];
let arr2 = [8, 9, 10];
console.log(arr1.concat(arr2));
console.log(arr1)
console.log(arr2)
