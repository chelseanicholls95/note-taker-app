const { v4: uuidv4 } = require("uuid");

const { read, write } = require("../../db/database");

const saveNewNote = (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: uuidv4() };
  const data = read();
  data.push(newNote);
  write(data);
  res.json(data);
};

module.exports = saveNewNote;
