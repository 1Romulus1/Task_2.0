const path = require("path");
const fs = require("fs");
const { SHA3 } = require("sha3");

const hash = new SHA3(256);
const directory = path.join(__dirname, "task2");

fs.readdir(directory, (err, files) => {
  if (err) {
    throw err;
  }
  const file = files
    .map((a) => {
      const directFile = path.join(directory, a);
      const data = fs.readFileSync(directFile);
      const strHash = hash.update(data).digest("hex");
      return strHash;
    })
    .sort()
    .join("")
    .concat("roma.kiva.97@gmail.com");
  const finalHash = hash.update(file).digest("hex");
  console.log(finalHash);
});
