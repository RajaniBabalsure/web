let arr = [90, 74, 86, 53, 29, 20, 19, 72, 91, 68, 94, 1, 19, 27, 88];

let giveAverage = () => {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }

    // Average = total of all elements / number of elements
    let avg = sum / arr.length;
    console.log(avg);
}

giveAverage();