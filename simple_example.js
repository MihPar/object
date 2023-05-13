const { readFile } = require("node:fs/promises");

async function countCategories() {
  const fileName =
    "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
  const data = await readFile(fileName, "utf8");
  const dataParsed = JSON.parse(data);
  const result = {};
  for (const elem of dataParsed.log.entries) {
    if (result[elem._resourceType]) {
      result[elem._resourceType]++;
    } else {
      result[elem._resourceType] = 1;
    }
  }
  console.log(result);
}
countCategories();
