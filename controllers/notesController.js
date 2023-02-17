 const Note = require("../models/notes")
const {StatusCodes} = require('http-status-codes')
const { NotFoundError } = require('../errors')


const createNote = async (req, res) => {
    const {title, notes} = req.body
    const note = await Note.create({title, notes, createdBy: req.user.userId})
    res.status(StatusCodes.CREATED).json({note})
}

const getAllNotes = async (req, res) => {
    const notes = await Note.find({})
    res.status(StatusCodes.OK).json({notes, nBHits: notes.length})
}

const getSingleNote = async (req, res) => {
    const {id: noteId} = req.params
    const note = await Note.findById(noteId)
    if (!note){
        throw new NotFoundError("Note doesn't exist.")
    }
    res.status(StatusCodes.OK).json({note})
}

const getSingleUserNotes = async (req, res) => {
    const notes = await Note.find({createdBy: req.user.userId})
    if (!notes){
        throw new NotFoundError("Notes doesn't exist.")
    }
    res.status(StatusCodes.OK).json({notes, nBHits: notes.length})
}

const updateNote = async (req, res) => {
    const {id: noteId} = req.params
    const note = await Note.findByIdAndUpdate(noteId, req.body, {new: true, runValidators: true});
    if (!note){
        throw new NotFoundError("Note doesn't exist.")
    }
    res.status(StatusCodes.OK).json({note})
}

const deleteNote = async (req, res) => {
    const {id: noteId} = req.params
    await Note.findByIdAndDelete(noteId)
    res.status(StatusCodes.OK).json({msg: "Note deleted successfully!"})
}


module.exports = {
    createNote,
    getAllNotes,
    getSingleNote,
    getSingleUserNotes,
    updateNote,
    deleteNote
}
