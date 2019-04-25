const path = require("path");

const config = {
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
};
module.exports = config;