const path = require("path");

const renderNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../public/notes.html");
  res.sendFile(filePath);
};

module.exports = renderNotes;
