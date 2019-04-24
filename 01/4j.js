function binarySearch(num, arrNum) {
  arrNum = arrNum.sort(function(a, b) {return a-b});
  let left = 0;
  let right = arrNum.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arrNum[middle] == num) {
      return middle;
    } else {
      if (arrNum[middle] > num) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return "Not found";
}

console.log(binarySearch(67, [2, 34, 45, 54, 67, 717]));

