const express = require("express");

const { renderHome, renderNotes } = require("../controllers/renderHTML");

const router = express.Router();

router.get("/notes", renderNotes);
router.get("/*", renderHome);

module.exports = router;
