// | Write a function which takes a takes and returns the uppercase of first letter and normal remaining
// function("shrikant")=>"shrikant" | toUpperCase
// function("sumit")=>"sumit"

function changeToUpperCase(string) /* 'shrikant' = ['s','h','r','i','k','a','n'.'t'] */ {
    let first_Word = string[0]; // 'a'
    let remaining = string.slice(1);
    return first_Word.toUpperCase() + remaining; // 's' + 'hrikant'
  }
  let capitalizeUserName = changeToUpperCase("sumit");
  console.log(capitalizeUserName)
 