function amountToCoins(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    if (amount >= coins[i]) {
      let remainder = amount % coins[i];  
      let count = (amount-remainder) / coins[i];
      for (let j = 0; j < count; j++) {
        result.push(coins[i]);
      }
      amount = remainder;
    }
  }
  return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

