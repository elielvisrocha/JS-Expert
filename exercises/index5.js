const bills = [125, 555, 44];

// const calcTip = (bill) => {
//     const tips = (bill * 15) / 100
//     const total = tips + bill;
//     return console.log(total);
// }

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

const tips = [];

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

function total(bills, tips) {
  return console.log(bills + tips);
}

total(bills[0], tips[0]);
total(bills[1], tips[1]);
total(bills[2], tips[2]);
