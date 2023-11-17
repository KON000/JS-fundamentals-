const hasDriversLicense = true; // A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Bexa is ablee to drive!');
} else {
  console.log('Someone else should drive...');
}
// Someone else should drive...
