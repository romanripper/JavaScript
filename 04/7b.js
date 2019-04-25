const fs = require("fs");

let dir = process.argv[2];
if (dir !== undefined) {
    if (dir.slice(-1) != "\\") { dir += "\\"; }
    fs.watch(dir, (event, file) => {
        if (file) {
            console.log(`${file}:`);
            fs.readFile(dir + file, (err, data) => {
                if (err) { throw err; }
                else { console.log(data.toString()); }
            });
        } else { console.log("File not found"); }
    });
}