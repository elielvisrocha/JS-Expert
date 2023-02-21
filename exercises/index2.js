//CODING CHALLENGE

const DOLPHINS = [96, 108, 89];

const KOALAS = [88, 91, 110];

const totalScoreDolphins = DOLPHINS.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue);
});

const totalScoreKoalas = KOALAS.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue);
});

let dolphins = totalScoreDolphins / 3;
console.log(dolphins.toFixed());

let koalas = totalScoreKoalas / 3;
console.log(koalas.toFixed());

const compareDolphinsAndKoalas = dolphins > koalas && dolphins >= 100;
const compareKoalasAndDolphins = dolphins < koalas && koalas >= 100;
const verifyDraw = (dolphins < 100 && koalas < 100) || dolphins === koalas;

if (compareDolphinsAndKoalas) {
  console.log(`The DOLPHINS won with ${dolphins.toFixed(0)} points!`);
} else if (compareKoalasAndDolphins) {
  console.log(`The KOALAS won with ${koalas.toFixed(0)} points!`);
} else if (verifyDraw) {
  console.log(`There is a draw between the teams!`);
}
