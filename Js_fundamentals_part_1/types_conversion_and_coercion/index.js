// Type converesion

const inputYear = '1991'; // String(1991)
console.log(inputYear + 18); // 19918
console.log(Number(inputYear) + 18); // 2009
console.log(Number(jonas)); // NaN, type of Nan - number (NaN - is invalid number!)
console.log(String(22)); // 22, type of 22 - string

// Type coercion

console.log("I'am" + 23 + 'years old'); // between 2 plus operator the number 23 converted into string
console.log('22' - '10' - 3); // 9, operator '-' automaticaly convert string to number
console.log('10' * '8' * '1'); // 88, same as shown above

let n = '1' + 1; // String(11)
n--; // 11 - 1, string automaticaly converted to number
console.log(n); // 10
