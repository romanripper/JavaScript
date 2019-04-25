function addText() {
    let num = 5;
    let timer = document.createElement("h1");
    let body = document.getElementById("content");
    body.appendChild(timer);
    let interval = setInterval(time, 1000);

    function time() {
        if (num == 0) {
            clearInterval(interval);
            body.removeChild(timer);
            let additionalText = document.createElement("p");
            additionalText.style.color = "blue";
            body.appendChild(additionalText);
            additionalText.textContent = "In the 19th century, scientists used the idea of random motions of molecules in the development of statistical mechanics to explain phenomena in thermodynamics and the properties of gases. According to several standard interpretations of quantum mechanics, microscopic phenomena are objectively random. That is, in an experiment that controls all causally relevant parameters, some aspects of the outcome still vary randomly. For example, if a single unstable atom is placed in a controlled environment, it cannot be predicted how long it will take for the atom to decay—only the probability of decay in a given time.";
        }
        else {
            timer.textContent = "Some more information in " + num + " seconds";
            num--;
        }
        
    }
}