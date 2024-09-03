// IF ELSE Statement | this is used to control the flow of process
//  if one condition is true then skip all other condition

let age = 17;

if (age >= 18 /* true */) {
  console.log("You are 18");
} else {
  // default run point
  console.log("You are not 18");
}

age = 51;
// Conditions | over 50 , over 18 , under 18
if (age >= 50) {
  // range = [50, 51 ,...... Infinity]
  console.log("You are " + age);
} else if (age >= 18) {
  // Range = [18 ,19 ,20 ,.... Infinity]
  console.log("You are 18");
} else {
  console.log("You are not 18");
}

// Check user grade | prompt  (age>= 50 && age <= 60 ) // range = [50, 51 ,... 60]
/*
100 - 81 = a
80 - 61 = b
60 - 51 = c
50- 41 = d  
40 - 36 = e
35 - 0 = f
 */


let score = 85

if (score<=100 && score>=81 ){// Range = [100,99,98,...81]
  console.log("Grade A")
} else{
  
}
  