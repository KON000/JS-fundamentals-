const age = 15;

if(age >= 18) {
    console.log("Koma can start driving license");
}
    else{
        const yearsLeft = 18 - age;
        console.log(`Koma is too young. Wait another ${yearsLeft} years :)`);
    }

const birthYear = 2012;
let century;
if (birthYear < 2000) {
    century = 20;
}
    else {
        century = 21;
    }
console.log(century);