const { read, write } = require("../../db/database");

const deleteNote = (req, res) => {
  const data = read();
  const { id } = req.params;
  const newData = data.filter((each) => each.id !== id);
  write(newData);
  res.json(newData);
};

module.exports = deleteNote;
