const { read } = require("../../db/database");

const getAllNotes = (req, res) => {
  const data = read();
  res.json(data);
};

module.exports = getAllNotes;
