const fs = require("fs");

const depto = [];
const prov = [];
const dist = [];

const callback = (err, data) => {
    try {
    const toString = JSON.stringify(data);
    const parsed = JSON.parse(toString);
    const cleaned = parsed.replace(/“|”/g, "");
    const newArray = cleaned.split("\n");
    // Step 1: Making the plain text usable
    //console.log(newArray);

    // Step 2: Separating the elements into arrays
    newArray.forEach(element => {
        // Step 2.1: Each line of the array will the input to be processed
        const lineArray = element.split("/");
        lineArray.forEach((code, index) =>{
            // 2.2: first and lineArray will be the places to extract the data
            const first = code.split(" ");
            console.log(first);
            console.log(lineArray);
        })
    });
    } catch (e) {
        console.log(e);
    }
};

fs.readFile("./file.txt", "utf8", callback);