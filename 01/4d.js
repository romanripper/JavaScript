function alphabeticalOrder(str){
    let strArr = str.replace(/\W/g, "").split("").sort();
    return "".concat(...strArr);
}

console.log(alphabeticalOrder("webmaster"));