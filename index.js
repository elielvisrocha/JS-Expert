// Variables and values;

// let continent = `America`;
// let country = `Brazil`;
// let population = 200;

// console.log(
//     `My country stay at ${continent},
// I live on ${country},
// and here there are ${population} million of people.
// `);

// Data Types;

//Primitive

//let name = "Eliélvis"; STRING
//let age = 20; NUMBER
//let isAlive = true; BOOLEAN
//let x; UNDEFINED
//let isNull = NULL;
//let unique = Symbol("Single"); SYMBOL;
//let bigNumber = BigInt(200); BIGINT

//Object

// let person = {
//     name: "Weider"
// }

//BASIC OPERATORS;

// let myBirthday = 2003;
// let discoverAge = new Date();
// let result = discoverAge.getFullYear() - myBirthday;

// console.log(result);

// let power = 2 ** 3;
// console.log(power);

// let number = 10;
// let result = number += 29;
// console.log(result);
// result = number -= 20;
// console.log(result);
// console.log(number);
// result = number / 2;
// console.log(result);

// let change = 19

//STRING and TEMPLATE LITERALS

// const firsName = "Eliélvis";
// const job = "Developer";
// const birthYear = 2003;

// const describeMe = "I'm " + firsName + " my current job is as " + job + " and my birth year is " + birthYear;

// console.log(describeMe);

// const describeMeAgain = `I'm ${firsName} my current job is as ${job} and my birth year is ${birthYear}`;

// console.log(describeMeAgain);

// console.log(`multi
// line
// strings`)

// console.log("multi \n\
// line \n\
// strings")

// const age = 19;
// const checkAge = age >= 18;

// if (checkAge) {
//     console.log(`Can join in the party`);
// }
// else {
//     console.log(`Can't join in the party`);
// };

// const birthYear = 2003;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
//     console.log(century)
// } else {
//     century = 21;
//     console.log(century)
// };

//TYPE CONVERSION

// let number = "2000";
// console.log(typeof number);
// console.log(+number + 10);

// let x = Number(number);
// console.log(typeof x);

//TYPE COERSION

// console.log("I'm " + 19 + " years old");
// console.log(90 - "20" - 10);
// console.log(90 * "20" * 10);

//BOOLEAN VALUES
//THERE ARE 5 FALSY VALURES: 0, "", UNDEFINED, NULL, NAN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// const money = 0;

// if(money) {
//     console.log(`Don't spend it all ;`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height;

// if(height) {
//     console.log(`OMG YOU'RE SO TALL`);
// } else {
//     console.log(`Pls, tell me how tall you're!`);
// }

//EQUALITY OPERATORS

// const age = '18';

// if(age == 18) console.log(`You became an adult!!(loose)`)
// if(age === 18) console.log(`You became an adult!!(strict)`)

// if(age === 18) {
//     console.log(`You can drive!!!`);
// } else {
//     console.log(`You can't drive anyway!!!`);
// }

// const checkDayOfWeek = prompt(`What's your favorite day of week?`);

// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const discoverDay = days.find((value) => {
//   if (checkDayOfWeek === value) {
//     alert(`You said ${value}`);
//   } else if (
//     checkDayOfWeek === "" ||
//     checkDayOfWeek === NaN ||
//     checkDayOfWeek === 0 ||
//     checkDayOfWeek === undefined
//   ) {
//     alert(`Please tell us a day of week you more like!!!`);
//   } else if (checkDayOfWeek != value) {
//     alert(`Oh no, tell us!`);
//   }
// });

//BOOLEAN LOGIC

// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// console.log(!hasGoodVision);

// const shouldDriveToTravel = hasDriversLicense || hasGoodVision;
// const shouldDriveToTravel = hasDriversLicense && hasGoodVision;
// const shouldDriveToTravel = !hasDriversLicense;
// const shouldDriveToTravel = !hasGoodVision;

// if(shouldDriveToTravel) {
//     console.log(`You can drive`);
// } else {
//     console.log(`We don't recommend you drive!`);
// }

//SWITCH STATAMENT

const day = 2;

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} 


switch (day) {
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  case 4:
    console.log(`Thursday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  case 7:
    console.log(`Sunday`);
    break;
}
