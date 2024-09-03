//-- For Loop | while loop aur jo variable ka initialization , condition and action after the loop

// Syntax
// for (initialisation ; condition ; actionAftertheLoop){ // actionAftertheLoop means the action after one loop is completed

// }

// Normal For Loop
for (let i = 1; i < 20; i += 2) {
    // Range = [1,3,5,7,9]
    //   console.log(i);
  }
  
  //? arr.length is property of array to give length of the array
  
  let arr = [1, 3, 5, 7, 9]; // arr.length = 5 | Collection
  console.log("The Element at first index is:", arr[1]); // 3 | Accessing the array element
  
  // To Access all the elements of the array | Accessing all the data from collection
  for (let i = 0; i < arr.length; i++) {
    // Range = [0,1,2,3,4]
    console.log(arr[i]);
  }
  
  console.log("Loop Ended --------------------------------------------");
  
  //! For Loops for Collections
  //? For In loop | Access the Index of the collections
  for (let i in arr) {
    // i = 0,1,2,3,4
    console.log(arr[i]);
  }
  console.log("Loop Ended --------------------------------------------");
  
  //? For of Value | Access the value of the collections
  for (let element of arr) {
    // element = 1 , 3 ,5, 7, 9
    console.log(element);
  }
  
  // Sum of all elements
  