const express = require("express");

const getAllNotes = require("../controllers/getAllNotes");
const saveNewNote = require("../controllers/saveNewNote");

const router = express.Router();

router.get("/notes", getAllNotes);
router.post("/notes", saveNewNote);

module.exports = router;
