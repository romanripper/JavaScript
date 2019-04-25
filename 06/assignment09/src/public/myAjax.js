function readAndCheckData() {
    let num1Field = document.getElementById("num1");
    let num2Field = document.getElementById("num2");
    if (Number(num1Field.value) && Number(num2Field.value)) {
        let num1 = Number(num1Field.value);
        let num2 = Number(num2Field.value);
        let operations = document.getElementById("operations");
        let currOperation = operations.options[operations.selectedIndex].value;
        //console.log(num1 + " " + num2 + " " + currOperation);
        return JSON.stringify({
            num1: num1,
            num2: num2,
            operation: currOperation
        });
    }
}

function calc() {
    let resultField = document.getElementById("result");
    let resultFieldLabel = document.getElementById("resultLabel");

    let req = new XMLHttpRequest();
    req.open("POST", "http://localhost:9999/jsonTest", true);
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.setRequestHeader("Content-Type", "application/json");

    let data = readAndCheckData();
    if (data) {
        req.send(readAndCheckData());
        req.onreadystatechange = () => {
            if (req.readyState == 4 && req.status == 200) {
                resultField.textContent = JSON.parse(req.responseText).result;
                resultField.style.color = "rgb(46, 127, 248)";
                resultFieldLabel.style.visibility = "visible";
            }
        };
    } else {
        resultFieldLabel.style.visibility = "hidden";
        resultField.textContent = "Error: wrong data provided";
        resultField.style.color = "rgb(221, 19, 19)";
    }
}