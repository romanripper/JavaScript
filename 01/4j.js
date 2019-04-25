function binarySearch(num, arrNum) {
  arrNum = arrNum.sort(function(a, b) {return a-b});
  let l = 0;
  let r = arrNum.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arrNum[m] == num) {
      return m;
    } else {
      if (arrNum[m] > num) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return "Not found";
}

console.log(binarySearch(67, [2, 34, 45, 54, 67, 717]));

