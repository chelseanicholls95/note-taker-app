const { read, write } = require("../../db/database");

const saveNewNote = (req, res) => {
  const data = JSON.parse(read());
  data.push(req.body);
  write(JSON.stringify(data));
};

module.exports = saveNewNote;
