
function checkOddEven(number) {
    if (number % 2 === 0) {
        return `${number} is Even`;
    } else {
        return `${number} is Odd`;
    }
}

// Example Usage:
console.log(checkOddEven(4)); 
console.log(checkOddEven(7)); 


function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example Usage:
console.log(isPrime(11)); 
console.log(isPrime(15)); 


function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example Usage:
console.log(factorial(5)); 
console.log(factorial(0)); 

function findLargestNumber(arr) {
    if (arr.length === 0) return null;

    let largest = arr[0];
    for (const num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}


function findLargestNumberUsingMath(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}

// Example Usage:
const numbers = [3, 7, 2, 9, 4];
console.log(findLargestNumber(numbers)); // Output: 9
console.log(findLargestNumberUsingMath(numbers)); // Output: 9

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function countVowelsUsingRegex(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Example Usage:
const text = "Hello World";
console.log(countVowels(text)); // Output: 3
console.log(countVowelsUsingRegex(text)); // Output: 3


