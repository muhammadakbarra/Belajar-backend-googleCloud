// cara 1
//const fs = require("fs");

// const writableStream = fs.createWriteStream("input.txt");

// writableStream.write("Ini merupakan Teks Baris pertama!\n");
// writableStream.write("Ini merupakan Teks Baris Kedua!\n");
// writableStream.end();

// // Baca kembali isi file dan cetak ke konsol
// const readableStream = fs.createReadStream("input.txt", "utf-8");
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

//cara 2
const fs = require("fs");
const { resolve } = require("path");

const readableStream = fs.createReadStream(resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(resolve(__dirname, "output.txt"));

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  writableStream.end();
});
