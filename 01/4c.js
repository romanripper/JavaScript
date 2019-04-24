function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  for (let i = 0, j = str.length-1; i < str.length/2; i++, j--) {
    if(str[i] != str[j]){
        return false;
    }
  }
  
  return true;
}
console.log(isPalindrome("e y,e!"));
