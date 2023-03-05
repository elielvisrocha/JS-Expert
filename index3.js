"use strict";

// OBJECTS

// const describeMe = ["Eliélvis", "Math", "Cats", ["Michael", "Jhonny", "Ellen"]];

// const describeMeObject = {
//   firstName: "Eliélvis",
//   favoriteClass: "Math",
//   pets: "Cats",
//   friends: ["Michael", "Jhonny", "Ellen"],
// };

// const knowMe = prompt("Do you want to know more about: firstName, favoriteClass, pets or friends?");

// if (describeMeObject[knowMe]) {
//     console.log(describeMeObject[knowMe]);
// } else {
//     console.log(new Error("Errorrrrr!!"))
// }

// describeMeObject.book = "WORK HARD: REALLY?";
// describeMeObject["github"] = "Elvis-Dev-T";
// console.log(describeMeObject);

// console.log("\n", describeMeObject["friends"][0]);

// console.log(`${describeMeObject.firstName} has ${describeMeObject.friends.join(", ")}, and his best friend is called ${describeMeObject["friends"][0]}`);

// console.log(describeMeObject.firstName);
// const name = "Name";
// console.log(describeMeObject["first" + name]);

// console.log(describeMeObject["pets"]);

// OBJECT METHODS

// const describeMeObject = {
//   firstName: "Eliélvis",
//   birthYear: 2003,
//   favoriteClass: "Math",
//   pets: "Cats",
//   friends: ["Michael", "Jhonny", "Ellen"],
//   hasDriveLicense : true,
// //   showMessage: function () {
// //       console.log(2023 - this.birthYear);
// //   }
// // showMessage() {
// //     console.log(2023 - this.birthYear);
// // }

// showMessage: function () {
//   this.i = console.log(`${this.firstName} is a ${2023 - this.birthYear} old developer, and he has ${this.hasDriveLicense ? "a" : "no"} driver's license.`);

//   return this.i;
// }
// };

// describeMeObject.showMessage();

// for loops keeps running while condition is TRUE;

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`You have ${rep} unit${rep > 1 ? "s" : ""}`);
// }

// const types = [];

// const describeMe = ["Eliélvis", "Math", "Cats", ["Michael", "Jhonny", "Ellen"], true];

// for (let i = 0; i < describeMe.length; i++) {

//   // READING ARRAY
//   console.log(`${describeMe[i]}, ${typeof describeMe[i]}`)

//   // FILLING TYPES ARRAY
//   // types[i] = typeof describeMe[i];
//   types.push(typeof describeMe[i]);
// }

// console.log(types);

// let ages = [2014, 2008, 1995, 1980, 2003];
// let calcAge = [];

// let calcAgeFunc = new Date().getFullYear();

// for (let i = 0; i < ages.length; i++) {
//   calcAge.push(calcAgeFunc - ages[i]);
// }

// console.log(calcAge);

// continue and break

// const describeMe = [
//   "Eliélvis",
//   "Math",
//   "Cats",
//   ["Michael", "Jhonny", "Ellen"],
//   true,
// ];

// for (let i = 0; i < describeMe.length; i++) {
//   if (typeof describeMe[i] !== "string") continue;

//   console.log(`${describeMe[i]}, ${typeof describeMe[i]}`);
// }


// for (let i = 0; i < describeMe.length; i++) {
//   if (describeMe[i] === "Math") break;

//   console.log(`${describeMe[i]}, ${typeof describeMe[i]}`);
// }



// const describeMe = [
//   "Eliélvis",
//   "Math",
//   "Cats",
//   ["Michael", "Jhonny", "Ellen"],
//   true,
// ];


// for (let i = describeMe.length - 1; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 4; i >= 0; i--) {
//   console.log(describeMe[i]);
// }


// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------------- Starting exercise ${exercise}`);

//   for (let y = 1; y <= 5; y++) {
//     console.log(`${exercise} - topic: ${y}`)

//     for (let y = 1; y <= 5; y++) {
//       console.log(`Let's study: ${y}`)
//     }
//   }
// }


// const describeMe = [
//   "Eliélvis",
//   "Math",
//   "Cats",
//   ["Michael", "Jhonny", "Ellen"],
//   true,
// ];


// let i = 0;

// while (i < describeMe.length) {
//   console.log(describeMe[i]);
//   i++;
// }





// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You've ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log(`Now we need finish the loop!`)
// }





// const temperatures = [
//   3, -2, -6, -1, 9, "error", 13, 17, 15, 14, 9, 5
// ];

// let justTemp;

// for (let i = 0; i < temperatures.length; i++) {
//   if (temperatures[i] === "error") {
//     justTemp = temperatures.filter(error => {
//       return error !== "error";
//     })

//     console.log(justTemp);

//   }
// }

// function max_and_min() {
//   const maxTemp = Math.max(...justTemp);
//   const minTemp = Math.min(...justTemp);

//   console.log(`The amplitude today is of ${maxTemp - minTemp}.`);
//   return console.log(`You highest temperature is ${maxTemp} and lower is ${minTemp}.`);
// }

// max_and_min(temperatures);







// DEBUGGING



// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) FIX
//     value: +prompt("Degrees celsius"),
//   };

//   // B) FIND
//   console.log(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin
// }

//   // A) IDENTIFY
// console.log(measureKelvin());




// const printForeCast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `...${arr[i]}ºC in ${i + 1} days...`;
//   }

//   console.log("..." + str)
// }

 
// printForeCast([17, 21, 23]);
// // printForeCast([12, 5, -5, 0, 4]);




