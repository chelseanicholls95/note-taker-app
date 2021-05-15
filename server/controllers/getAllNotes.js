const read = require("../../db/read");

const getAllNotes = (req, res) => {
  const data = JSON.parse(read());
  const notes = data.map(({ title, text }) => ({
    title,
    text,
  }));

  res.json(notes);
};

module.exports = getAllNotes;
