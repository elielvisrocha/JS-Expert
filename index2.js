"use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log(`I can drive`);

//FUNCTIONS

// function logger() {
//     console.log(`I'M ELIÉLVIS`);
// };

// //CALLING / RUNNING / INVOKING FUNCTION;

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// let applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);

// let orangesJuice = fruitProcessor(0, 10);
// console.log(orangesJuice);

// let applesAndOrangeJuice = fruitProcessor(10, 20);

// console.log(applesAndOrangeJuice);

// FUNCTION DECLARATION

// function calcAge(dateBirth) {
//     const date = new Date
//     return date.getFullYear() - dateBirth
// }
// console.log(calcAge(2003))

// FUNCTION EXPRESSION

// const age = function calcAge(dateBirth) {
//     const date = new Date
//     return date.getFullYear() - dateBirth
// }
// console.log(age(2000))

//ARROW FUNCTIONS

// const age = birthYear => 2023 - birthYear;

// console.log(age(2003));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;

//     return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2003, "Eliélvis"));

// FUNCTIONS INVOKING ANOTHER FUNCTIONS

// function call(showMessage) {
//     return console.log(showMessage + " " + `Have a nice breakfast.`)
// }

// function fruitProcessor(apples, oranges, call) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     call(juice)
// }

// fruitProcessor(4, 6, call)

// function cutePieces(pieces) {
//     return pieces * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutePieces(apples);
//     const orangePieces = cutePieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 4));

// REVIEWING FUNCTIONS

// const calcAge = function (birthYear) {
//     return 2023 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

// return retirement;
// return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2003, "Eliélvis"));

// ARRAYS

// const COUNTRYS = [
//     "BRASIL",
//     "JAPAN"
// ];

// COUNTRYS[2] = "ENGLAND";

// console.log(COUNTRYS[0]);
// console.log(COUNTRYS);
// console.log(COUNTRYS.length);
// console.log(COUNTRYS[COUNTRYS.length - 1]);

// EXERCISE

// const calcAge = function (dateBirth) {
//   return 2023 - dateBirth;
// };

// const years = [2900, 2012, 2015, 2008, 2021, 2023];

// console.log([
//   calcAge(years[0]),
//   calcAge(years[years.length - 1]),
//   calcAge(years[2]),
// ]);

// METHODS WITH ARRAYS

// ADD ELEMENTS

const friends = ["Jay", "Robert", "Anny"];

const newFriends = friends.push("Autuno");

console.log(friends);
console.log(newFriends);

friends.unshift("Larry");
console.log(friends);

// REMOVE ELEMENTS

friends.shift();
console.log(friends);
friends.pop();
console.log(friends);

// FIND AN ELEMENT

console.log(friends.indexOf("Anny"));
console.log(friends.includes("Jay"));

if (friends.includes("Robert")) {
  console.log("You've a good friend!");
}
