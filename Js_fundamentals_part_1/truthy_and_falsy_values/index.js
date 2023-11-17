console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('jonas')); //true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;
if(money) {
    console.log("don't spend it all");
}                                               // false, "you should get a job"
    else {
        console.log("you should get a job");
    }
    