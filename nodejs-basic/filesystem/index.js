// const fs = require("fs");

// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log("Gagal Membaca berkas");
//     return;
//   }
//   console.log(data);
// };

//cara 1
// fs.readFile("notes.txt", "utf-8", fileReadCallback);

// const fs = require("fs");

// const data = fs.readFileSync(resolve(__dirname, "notes.txt"), "UTF-8");
// console.log(data);

// cara 2
const fs = require("fs");
const { resolve } = require("path");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);
