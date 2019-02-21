const fs = require("fs");

const callback = (err, data) => {
    const toString = JSON.stringify(data);
    console.log(toString);
};

fs.readFile("./file.txt", "utf8", callback);