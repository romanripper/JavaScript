function Nth_FibonacciMember(n) {
  switch(n){
    case 0: return 0;
    case 1: return 1;
    default: return Nth_FibonacciMember(n - 1) + Nth_FibonacciMember(n - 2);
  }
}

for (let i = 0; i <= 7; i++) {
  console.log(Nth_FibonacciMember(i));
}
