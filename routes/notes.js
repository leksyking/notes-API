const express = require("express")
const router = express.Router()
const {createNote, getAllNotes, getSingleNote, getSingleUserNotes, updateNote, deleteNote} = require("../controllers/notesController")
const authenticationMiddleware = require("../middlewares/authentication")

router.route("/")
.get(getAllNotes)
.post(authenticationMiddleware, createNote);
router.get("/my-notes", authenticationMiddleware, getSingleUserNotes)
router.patch("/:id", authenticationMiddleware, updateNote);
router.delete("/:id", authenticationMiddleware, deleteNote);
router.get("/:id", authenticationMiddleware, getSingleNote)



module.exports = router;