// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof language);






//CHALLENGE EXERCISES



const Marks = {
    weight: 78,
    tall: 1.69
};

const John = {
    weight: 92,
    tall: 1.95
}

// const Marks = {
//     weight: 95,
//     tall: 1.88
// };

// const John = {
//     weight: 85,
//     tall: 1.76
// };



let calculateBMIMark = Marks.weight / Marks.tall ** 2;
console.log(calculateBMIMark);

let calculateBMIJohn = John.weight / John.tall ** 2;
console.log(calculateBMIJohn);

let markeHigherBMI = calculateBMIJohn < calculateBMIMark;

console.log(markeHigherBMI);

if (calculateBMIJohn < calculateBMIMark) {
    console.log(`Marks BMI ${calculateBMIMark.toFixed(0)} is higher than John ${calculateBMIJohn.toFixed(0)}.`);
} else {
    console.log(`John BMI ${calculateBMIJohn.toFixed(0)} is higher than Marks ${calculateBMIMark.toFixed(0)}.`);
};


