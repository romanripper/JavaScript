function convert() {
    let degreesField = document.getElementById("degrees");
    let answerField =  document.getElementById("answer");
    if (Number(degreesField.value) || degreesField.value === "0") {
        let degrees = Number(degreesField.value);
        let scales = document.getElementById("scales");
        let selectedScale = scales.options[scales.selectedIndex].value;

        if (selectedScale == "Celsius")
            answerField.textContent = "Result: " + (degrees * 9 / 5 + 32) + " °F";
        else
            answerField.textContent = "Result: " + ((degrees - 32) * 5 / 9) + " °C";       
    }
    else{ 
        alert("Not a number");
        answerField.textContent = "";
    }
    degreesField.value = "";
}