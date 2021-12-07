const Papa = require("papaparse");
const neatCsv = require("neat-csv");
const slug = require("slug");
const fs = require("fs");

//IMPORT ALL FILES IN /RAW AND STORE EACH IN SEPARATE OBJECT KEYED IN MAIN EXPORT OBJECT

async function importCSV (fileName, resolve) {
  const rawCSV = fs.readFileSync(`./data/raw/${fileName}-data.csv`, {
    encoding: "utf8",
    flag: "r",
  });

  const rawJSON = await neatCsv(rawCSV);
  const keys = rawJSON.map((row) => slug(row.name));

  let nestedJSON = rawJSON.map((row) => {
    if(row.parent && row.parent.length) {
      const parentIndex = keys.indexOf(slug(row.parent));
      const parent = rawJSON[parentIndex];
      if(parent) {
        if(!parent.children) rawJSON[parentIndex].children = [];
        rawJSON[parentIndex].children.push(row);
      }
      // console.log(parent);
      // parent.push(row);
    }
    return row;
  }).filter((row) => !row.parent);

  resolve({[fileName]: nestedJSON});
}

(async () => {
	const fileNames = ["commissions", "collaborations", "nonprofit", "teaching", "workshops"];
  // const groupedJSON = await fileNames.reduce(async (obj, fileName) => {
  //   // await console.log(obj);
  //   console.log(fileName);
  //   return {...obj, [fileName]: await importCSV(fileName)};
  // }, {});
  // const groupedJSON = fileNames.reduce((a, b)=> console.log(a, b), {});
  // const groupedJSON = fileNames.forEach(async (fileName) => {
  //   const nestedJSON = await importCSV(fileName);
    
  // });

  // fileNames.forEach(async (fileName) => {
  //   const importedJSON = await importCSV(fileName);

  //   groupedJSON[fileName] = importedJSON;
  // }).then(() => {
  //   console.log(groupedJSON);
  // });
  // await ;

  let requests = fileNames.map((fileName) => {
    return new Promise((resolve) => {
      importCSV(fileName, resolve);
    });
  })

  Promise.all(requests).then((fullJSON) => {
    fs.writeFileSync("./data/data.js", `export default ${JSON.stringify(Object.assign({}, ...fullJSON))}`);
  });

})();