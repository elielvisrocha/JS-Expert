const Mark = {
  name: "Mark Miller",
  weight: 78,
  tall: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.tall ** 2;
    return this.BMI.toFixed(0);
  },
};

// const calcBMI = function (weight, tall) {
//     const BMI = weight / tall ** 2;
//     return console.log(BMI.toFixed(0));
// };

const John = {
  name: "John Smith",
  weight: 92,
  tall: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.tall ** 2;
    return this.BMI.toFixed(0);
  },
};


// calcBMI(John.weight, John.tall);

// if (Mark.calcBMI() > John.calcBMI()) {
//   console.log(
//     `${Mark.name}'s BMI (${Mark.calcBMI()}) is higher than ${
//       John.name
//     }'s (${John.calcBMI()}).`
//   );
// } else if (Mark.calcBMI() < John.calcBMI()) {
//   console.log(
//     `${John.name}'s BMI (${John.calcBMI()}) is higher than ${
//       Mark.name
//     }'s (${Mark.calcBMI()}).`
//   );
// }

// const message =
//   Mark.calcBMI() > John.calcBMI() || Mark.calcBMI() < John.calcBMI()
//     ? `${Mark.name}'s BMI (${Mark.calcBMI()}) is higher than ${
//         John.name
//       }'s (${John.calcBMI()}).`
//     : `${John.name}'s BMI (${John.calcBMI()}) is higher than ${
//         Mark.name
//       }'s (${Mark.calcBMI()}).`;

// console.log(message);

const markTest = Mark.calcBMI() > John.calcBMI();
const johnTest = Mark.calcBMI() < John.calcBMI();

const marksWinMessage = `${Mark.name}'s BMI (${Mark.calcBMI()}) is higher than ${
  John.name
}'s (${John.calcBMI()}).`;

const johnWinMessage = `${John.name}'s BMI (${John.calcBMI()}) is higher than ${
  Mark.name
}'s (${Mark.calcBMI()}).`;

const message = markTest || johnTest ? marksWinMessage : johnWinMessage;

// const message =
//   markTest || johnTest
//     ? `${Mark.name}'s BMI (${Mark.calcBMI()}) is higher than ${
//         John.name
//       }'s (${John.calcBMI()}).`
//     : `${John.name}'s BMI (${John.calcBMI()}) is higher than ${
//         Mark.name
//       }'s (${Mark.calcBMI()}).`;

console.log(message);
