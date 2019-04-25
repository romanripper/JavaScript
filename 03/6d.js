function addData() {
    let nameField = document.getElementById("fullName");
    let emailField = document.getElementById("email");
    let telNumberField = document.getElementById("telNumber");
    let regex = /\S/;
    if (regex.test(nameField.value) || regex.test(emailField.value) ||
        regex.test(telNumberField.value)) {
        addRow(createTd(nameField.value), createTd(emailField.value), createTd(telNumberField.value));
        clearFields(nameField, emailField, telNumberField);
    }

    function createTd(context) {
        let td = document.createElement("td");
        td.textContent = context;
        return td;
    }
    function addRow(...tds) {
        let tr = document.createElement("tr");
        tds.forEach(td => {
            tr.appendChild(td);
        });
        document.getElementById("table").appendChild(tr);
    }
    function clearFields(...fields){
        fields.forEach(field => {
            field.value = "";
        });
    }

}