const fs = require("fs");

const depto = [];
const prov = [];
const dist = [];

const callback = (err, data) => {
    const toString = JSON.stringify(data);
    const parsed = JSON.parse(toString);
    const cleaned = parsed.replace(/“|”/g, "");
    console.log(cleaned);
};

fs.readFile("./file.txt", "utf8", callback);