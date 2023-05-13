const { readFile } = require("node:fs/promises");

// async function findLargestValue() {
//   const fileName = "www.geeksforgeeks.org.har";
//   const content = await readFile(fileName, "utf8");
//   const data = JSON.parse(content);
//   const arr = [];
//   for (const entry of data.log.entries) {
//     // console.log(entry.response.content.size);
//     arr.push(entry.response.content.size);
//   }
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   console.log(arr[0]);
//   console.log(Math.max(...arr));
// }
// findLargestValue();

async function validateSize() {
  const fileName = "www.geeksforgeeks.org.har";
  const content = await readFile(fileName, "utf8");
  const data = JSON.parse(content);
  //   for (const entry of data.log.entries) {
  //     console.log(
  //       entry.response.content.size,
  //       entry.response.content.text?.length || 0
  //     );
  //   }

  //   for (const { response } of data.log.entries) {
  //     console.log(response.content.size, response.content.text?.length || 0);
  //   }

  //   for (const { response: { content } } of data.log.entries) {
  //     console.log(content.size, content.text?.length || 0);
  //   }

  for (const entry of data.log.entries) {
    const content = entry.response.content;
    if (content.size !== (content.text?.length || 0)) {
      console.log(content.size, content.text?.length || 0);
    }
  }
}
validateSize();
