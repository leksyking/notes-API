const User = require("../models/user")
const Note = require("../errors/note")
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnauthenticatedError, NotFoundError } = require('../errors')




const createNote = async (req, res) => {

}

const getAllNotes = async (req, res) => {
    
}

const getSingleNote = async (req, res) => {
    
}

const getSingleUserNotes = async (req, res) => {
    
}

const updateNote = async (req, res) => {
    
}

const deleteNote = async (req, res) => {
    
}


module.exports = {
    createNote,
    getAllNotes,
    getSingleNote,
    getSingleUserNotes,
    updateNote,
    deleteNote
}
