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


const describeMeObject = {
  firstName: "Eliélvis",
  birthYear: 2003,  
  favoriteClass: "Math",
  pets: "Cats",
  friends: ["Michael", "Jhonny", "Ellen"],
  hasDriveLicense : true,
//   showMessage: function () {
//       console.log(2023 - this.birthYear);
//   }
// showMessage() {
//     console.log(2023 - this.birthYear);
// }
  
showMessage: function () {
  this.describeMessage = console.log(`${this.firstName} is a ${2023 - this.birthYear} old developer, and he has ${this.hasDriveLicense ? "a" : "no"} driver's license.`);

  return this.describeMessage;
}
};

describeMeObject.showMessage();


