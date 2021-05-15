const fs = require("fs");
const path = require("path");

const read = () => {
  const data = fs.readFileSync(path.join(__dirname, "./db.json"));
  return data;
};

module.exports = read;
