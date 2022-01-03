const Papa = require("papaparse");
const neatCsv = require("neat-csv");
const slug = require("slug");
const fs = require("fs");

async function importCSV (fileName, resolve) {
  const rawCSV = fs.readFileSync(`./data/${fileName}-data.csv`, {
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
    }
    return row;
  }).filter((row) => !row.parent);
  resolve({[fileName]: nestedJSON});
}

(async () => {
	const fileNames = ["commissions", "collaborations", "nonprofit", "teaching", "workshops"];
  let requests = fileNames.map((fileName) => {
    return new Promise((resolve) => {
      importCSV(fileName, resolve);
    });
  });
  Promise.all(requests).then((fullJSON) => {
    fs.writeFileSync("./pages/_helpers/data.js", `export default ${JSON.stringify(Object.assign({}, ...fullJSON))}`);
  });
})();