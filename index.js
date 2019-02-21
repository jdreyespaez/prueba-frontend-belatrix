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
            
            // 2.3: Building the array for Depto
            if (index === 0) {
                const obj = {
                    codigo: first[0],
                    nombre: first[1],
                };
                if (obj.nombre.length > 0 || obj.codigo.lenght > 0) {
                    depto.push(obj);
                }
                console.log(depto);
            }
        })
    });

    // Step 3: Creating the JSON to be rendered
    // 3.1: The file depto.json
    fs.writeFile("./data/depto.json", JSON.stringify(depto, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("JSON file for Depto was created.");
    });

    } catch (e) {
        console.log(e);
    }
};

fs.readFile("./file.txt", "utf8", callback);