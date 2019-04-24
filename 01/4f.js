function isPrime(n) {
  switch (n) {
    case (1, 0):
      return false;
    case 2:
      return true;
    default: {
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
}

console.log(isPrime(17));
