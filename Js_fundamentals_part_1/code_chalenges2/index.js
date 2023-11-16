class BMIPerson {
  constructor({ weight, height }) {
    this.weight = weight;
    this.height = height;
  }

  calculateBMI = function () {
    return (this.weight / (this.height * this.height)).toFixed(5);
  };
}

const Mark = new BMIPerson({ weight: 78, height: 169 });
const John = new BMIPerson({ weight: 92, height: 195 });

class BMICompare {
  constructor({ higher, lower }) {
    this.higher = higher;
    this.lower = lower;
  }
}

const isMarkHigher = new BMICompare({
  higher: {
    name: 'Mark',
    bmi: Mark.calculateBMI(),
  },
  lower: {
    name: 'John',
    bmi: John.calculateBMI(),
  },
});

const isJohnHigher = new BMICompare({
  higher: {
    name: 'John',
    bmi: John.calculateBMI(),
  },
  lower: {
    name: 'Mark',
    bmi: Mark.calculateBMI(),
  },
});

const higherBMI =
  Mark.calculateBMI() > John.calculateBMI() ? isMarkHigher : isJohnHigher;

console.log(higherBMI);

const logCompare = ({ higher, lower }) =>
  `${higher.name}'s  BMI (${higher.bmi}) higher than ${lower.name}'s  BMI (${lower.bmi}) `;

console.log(logCompare(higherBMI));
