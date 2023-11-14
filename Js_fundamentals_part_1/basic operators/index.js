// Math operators
const ageJonas = 2037 - 1991;
                                // that's not good 'cause we're repeating this value
const ageSarah = 2037 - 2018;

console.log(ageJonas, ageSarah); // 46, 19. Output multiply values 



const now = 2037;

const ageJonas = now - 1991;
                                // a better use case for variable right here
const ageSarah = now - 1991;

console.log(ageJonas, ageSarah); // 46, 19 .



const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + lastName);  // JonasSchmedtman, also we can
console.log(firstName + ' ' + lastName)  // Jonas Schmedtman


// Assignment operators
let x = 10 + 5; // 15
    x += 10; // x = x + 10 (25)
    x *= 4; // x = x * 4 (60)
    x++; // x = x + 1 (16)
    x--; // x = x - 1 (14) 



//Comparison operators
console.log (ageSarah < ageJonas); //true (boolean), < > <= >=
const isFullAge = ageSarah >= 18; // true


