// const bill = 40;
// const bill = 275;
const bill = 430;

const checkValueOfTip = bill >= 50 && bill <= 300 ?
      (bill * 15) / 100
    : (bill * 20) / 100;

const tipToPay = checkValueOfTip + bill;

console.log(`Your total bill more the tip is ${tipToPay}.`);
