function convert(distance, selectedScale) {
    const specNumber = 1.609344;
    if (selectedScale == "kilometers"){
        return `Result: ${distance / specNumber} m`;
    }
    else { 
        return `Result: ${distance * specNumber} km`;
    }
}
module.exports = convert;