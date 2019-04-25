const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//a
app.get("/hello", (req, res) => res.send("hello world"));

//b
app.get("/form", (req, res) => res.render("form"));

//c
app.post("/formdata", (req, res) => {
    let body = req.body;
    let person = {
        fullName: body.fullName,
        email: body.email,
        number: body.telNumber
    };
    res.render("tableView", { person: person, student: undefined });
});

//d
app.post("/jsondata", (req, res) => {
    let body = req.body;
    if (body.id || body.fullName || body.grades) {
        let student = {
            id: body.id,
            fullName: body.fullName,
            grades: body.grades
        };
        res.render("tableView", { student: student, person: undefined });
    }
    else {
        res.render("tableView", { student: undefined, person: undefined });
    }
});

app.listen(9999, "localhost");

// curl -X POST -H "Content-Type: application/json" -d @D:\PJAIT\TIN\assignment08\jsondataTest.json http://localhost:9999/jsondata