// Switch Case
let age = 20;
if (age == 18) {
  //   console.log("You are 18 years old");
}

switch (
  age // Variable check in brackets | age
) {
  case 18: // if age == 18
    console.log("You are 18 years old");
    break; // to break the switch case
  case 19: // if age == 19
    console.log("You are 19 years old");
    break;
  case 20:
    console.log("You are below 22");
    break;
  default: // Else condition
    console.log("Your age isn't mentioned here");
    break;
}
