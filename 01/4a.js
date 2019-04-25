let recursiveFactorial = function factorial(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

function iterativeFactorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

console.log(recursiveFactorial(5));
console.log(iterativeFactorial(5));
