//CODING CHALLENGE

// const DOLPHINS = [44, 23, 71];

// const KOALAS = [65, 54, 49];

const DOLPHINS = [85, 54, 41];

const KOALAS = [23, 34, 27];

const totalScoreDolphins = DOLPHINS.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue);
});

const totalScoreKoalas = KOALAS.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue);
});


console.log(totalScoreDolphins);
console.log(totalScoreKoalas);

const calcAverage = (scoreFromTheTeams) => {
    const average = scoreFromTheTeams / 3;
    return average.toFixed(0);
};


const scoreKoalas = calcAverage(totalScoreKoalas);
const scoreDolphins = calcAverage(totalScoreDolphins);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins won (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas won (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No times won!`);
    }
};


checkWinner(scoreKoalas, scoreDolphins);