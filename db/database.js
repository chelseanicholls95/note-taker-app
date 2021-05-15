const fs = require("fs");
const path = require("path");

const read = () => {
  const data = fs.readFileSync(path.join(__dirname, "./db.json"));
  return data;
};

const write = (data) => {
  const callback = (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully added to file!");
    }
  };
  const filePath = path.join(__dirname, "./db.json");
  fs.writeFile(filePath, data, callback);
};

module.exports = { read, write };
