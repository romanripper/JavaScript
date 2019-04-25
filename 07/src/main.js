const distanceConverter = require("./distanceConverter");
const temperatureConverter = require("./temperatureConverter");

function convertTemp() {
    let toConvertField = document.getElementById("temp");
    let answerField = document.getElementById("tempAnswer");
    if (Number(toConvertField.value) || toConvertField.value === "0") {
        let degrees = Number(toConvertField.value);
        answerField.textContent = temperatureConverter(degrees, getSelectedOption("tempOptions"));
    }
    else {
        answerField.textContent = "";
        alert("Not a number");
    }
}
function convertDist() {
    let toConvertField = document.getElementById("dist");
    let answerField = document.getElementById("distAnswer");
    if (Number(toConvertField.value) || toConvertField.value === "0") {
        let distance = Number(toConvertField.value);
        answerField.textContent = distanceConverter(distance, getSelectedOption("distOptions"));
    }
    else {
        answerField.textContent = "";
        alert("Not a number");
    }
}

function getSelectedOption(selectId) {
    let scales = document.getElementById(selectId);
    return scales.options[scales.selectedIndex].value;
}

window.onload = function () {
    document.getElementById('distButton').onclick = () => {
        convertDist();
    };
    document.getElementById('tempButton').onclick = () => {
        convertTemp();
    };
};