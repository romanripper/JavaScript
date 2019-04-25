const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


app.post("/jsonTest", (req, res) => {
    let body = req.body;
    let operation = body.operation;
    let num1 = Number(body.num1);
    let num2 = Number(body.num2);
    let result;
    switch (operation) {
        case "add": result = num1 + num2;
            break;
        case "subtract": result = num1 - num2;
            break;
        case "multiply": result = num1 * num2;
            break;
        case "divide": result = num1 / num2;
            break;
        default: break;
    }
    res.send(JSON.stringify({
        result: result
    }));
});

app.listen(9999, "localhost");
