const http = require("http");
const url = require("url");
const EventEmmiter = require("events").EventEmitter;
const emmiter = new EventEmmiter();

emmiter.on("error", (err, res) => {
    res.write("Error: " + err.message);
});

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let operation = url.parse(req.url).pathname.slice(1);
    let query = url.parse(req.url, true).query;
    if (query.num1 !== undefined && query.num2 !== undefined) {
        if (Number(query.num1) && Number(query.num2)) {
            let num1 = Number(query.num1);
            let num2 = Number(query.num2);
            switch (operation) {
                case "add":
                    res.write(num1 + " + " + num2 + " = " + (num1 + num2));
                    break;
                case "sub":
                    res.write(num1 + " - " + num2 + " = " + (num1 - num2));
                    break;
                case "mul":
                    res.write(num1 + " * " + num2 + " = " + (num1 * num2));
                    break;
                case "div":
                    res.write(num1 + " / " + num2 + " = " + (num1 / num2));
                    break;
                default:
                    emmiter.emit("error", new Error("Only operations: add, sub, mul, div are allowed"), res);
                    break;
            }
        }
        else {
            emmiter.emit("error", new Error("Only numbers allowed to be passed as parameters"), res);
        }
    }
    else{
        emmiter.emit("error", new Error("Query string should have 2 parameters: num1 and num2"), res);
    }
    res.end();
}).listen(9999, "localhost");