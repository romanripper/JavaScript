function validate() {
    let emailField = document.getElementById("email");
    let telNumberField = document.getElementById("telNumber");
    let emailRegex = /^\w+@[a-zA-Z]+(\.[a-zA-Z]{2,3}){1,2}$/;
    let telNumberRegex = /^(\d{9})|(\+\d{11})$/;

    let result = true;
    checkField(emailRegex, emailField);
    checkField(telNumberRegex, telNumberField);
    return result;

    function checkField(regex, field){
        if (!regex.test(field.value)){
            informUser(field, "bisque", "red");
            result = false;
        }
        else
            informUser(field, "#b3ffb3", "#009933");
    }

    function informUser(field, backgroundColor, borderColor) {
        field.style.backgroundColor = backgroundColor;
        field.style.borderColor = borderColor;
        field.style.borderStyle = "solid";
    }
}