const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

};

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    const calcOfTips = calcTip(bills[i]);
    tips.push(calcOfTips);
    total.push(bills[i] + calcTip(bills[i]))

    console.log(`Your bill is ${bills[i]}, more the tips your total will be ${total[i]}, you're must to give ${calcOfTips} of tips;`);
}


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum / arr.length
}

console.log(calcAverage(tips));
console.log(calcAverage(total));













