// async function extentionObject() {
//   const fileName =
//     "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
//   const data = await readFile(fileName, "utf8");
//   const dataParse = JSON.parse(data);
let target = { x: 1 },
  source = { x: 55, y: 2, z: 3 };
for (let key of Object.keys(source)) {
  if (!(key in target)) {
    target[key] = source[key];
  }
}
console.log(target);
// }
// extentionObject();
