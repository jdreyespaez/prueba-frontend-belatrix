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
            
            // PROV: To identify the parent we'll use lineArray[0]
            const lineDadCode = lineArray[0].split(" ")[0];
            const lineDadName = lineArray[0].split(" ")[1];
            console.log(lineDadCode);
            console.log(lineDadName);

            // 2.3: Building the array for Depto
            if (index === 0) {
              const obj = {
                  codigo: first[0],
                  nombre: first[1],
              };
              if (obj.nombre.length > 0 || obj.codigo.lenght > 0) {
                  depto.push(obj);
              }
            // 2.4: Building the array for Prov
            } else if (index === 1) {
              const obj = {
                codigo: first[1],
                nombre: first[2],
                lineDadCode,
                lineDadName,
              };
              if (obj.nombre.length > 0 || obj.codigo.length > 0) {
                prov.push(obj);
              }
            }
        })
    });

    // Step 3: Creating the JSON to be rendered
    // 3.1: Creating file depto.json
    fs.writeFile("./data/depto.json", JSON.stringify(depto, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("JSON file for Depto was created.");
    });

    // 3.2: Creating file prov.json
    fs.writeFile("./data/prov.json", JSON.stringify(prov, null, 4), (err) => {
      if (err) {
          console.error(err);
          return;
      };
      console.log("JSON file for Prov was created.");
    });

    } catch (e) {
        console.log(e);
    }
};

fs.readFile("./file.txt", "utf8", callback);