let button = document.getElementById("calculate")
button.addEventListener("click", CoinCounter);

let coinPurse = {
quarters: 0,
dimes: 0,
nickles: 0,
pennies: 0,
}

let quarters = 25;
let dimes = 10;
let nickels = 5;
let pennies = 1;

function CoinCounter() {
  // get there input value
  let inputArea = document.getElementById("inputArea").value * 100;
  


 let currentAmount = inputArea;
 let quartersAmount = currentAmount /  quarters;
 console.log(quartersAmount);
 

 coinPurse.quarters += Math.floor(quartersAmount);
 console.log(coinPurse);
 currentAmount = currentAmount - (quarters * coinPurse.quarters);
 console.log(currentAmount);

let dimeAmount = currentAmount / dimes;
coinPurse.dimes += Math.floor(dimeAmount);
currentAmount = currentAmount - (dimes * coinPurse.dimes);
console.log(dimeAmount);
console.log(coinPurse);

let nickelAmount = currentAmount / dimes;
coinPurse.dimes += Math.floor(nickelAmount);
currentAmount = currentAmount - (dimes * coinPurse.dimes);
console.log(nickelAmount);
console.log(coinPurse);

let pennyAmount = currentAmount / dimes;
coinPurse.dimes += Math.floor(pennyAmount);
currentAmount = currentAmount - (dimes * coinPurse.dimes);
console.log(pennyAmount);
console.log(coinPurse);




 }