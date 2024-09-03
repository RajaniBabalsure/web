// Q.1 create a variable of type string and try to add a number to it ?

let str = "hellow";
let num = 5;
console.log(str + num);
let str2 = str + num;
// Q.2 Use type of operator to find datatype of the string in last question?
console.log(typeof str2); // string
//Q.3 Create a const object in javascript . Can you change it to hold a number later?
const obj = {
  key: "value",
};
console.log(obj);
// obj = 5; // This will throw an Error | Assignment to constant variable.
//Q.4  Try to add a new key to the const object in problem 3 . Were you able to do it?
obj.name = "sumit";

console.log(obj); // Yes we can

// Q.5 Write a js program to create a word-meaning dictionary of 5 word? // 5
const dictionary = {
  car: "a road vehicle with four wheels that can carry a small number of people",
  pizza:
    "an Italian dish consisting of a flat round bread base with vegetables, cheese, meat, etc. on top, which is cooked in an oven",
};

const hindiDictionary = {
  pizza:
    "इटैलियन खाद्य जिसमें सपाट गोल ब्रेड पर सब्‍ज़ी, पनीर, मांस आदि रख कर ओवन में पकाया जाता है; पिज़ा",
};
console.log(dictionary);
console.log(hindiDictionary);
