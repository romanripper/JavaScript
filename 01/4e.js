function longestWord(str) {
  let strArr = str.replace(/\W/g, " ").split(" ");
  let maxletters = 0
  let indexOfMax = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxletters) {
      maxletters = strArr[i].length;
      indexOfMax = i;
    }
  }
  return strArr[indexOfMax];
}

console.log(longestWord("Csharp, Javascript, Java"));
