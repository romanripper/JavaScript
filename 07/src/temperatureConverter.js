function convert(degrees, selectedScale) {
    if (selectedScale == "celsius") {
       return `Result: ${degrees * 9 / 5 + 32} °F or ${degrees + 273.15} °K`;
    }
    else if (selectedScale == "kelvin") {
        return `Result: ${degrees * 9 / 5 - 459.67} °F or ${degrees - 273.15} °C`;
    }
    else {
        return `Result: ${(degrees - 32) * 5 / 9} °C or ${(degrees + 459.67) * 5 / 9} °K`;
    }
}
module.exports = convert;
