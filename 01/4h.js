function secondMinAndMax(arrNum){
    arrNum = arrNum.sort(function(a, b) {return a-b});
    return [arrNum[1], arrNum[arrNum.length-2]];
}

console.log(secondMinAndMax([3, 4, 1, 6, 3, 22, 8, 9]));
