const express = require("express");

const renderNotes = require("../controllers/renderNotes");

const router = express.Router();

router.get("/notes", renderNotes);

module.exports = router;
