const uuid = require("uuid");

const { read, write } = require("../../db/database");

const saveNewNote = (req, res) => {
  const data = JSON.parse(read());
  req.body.id = uuid.v4();
  data.push(req.body);
  write(JSON.stringify(data));
  res.json(data);
};

module.exports = saveNewNote;
