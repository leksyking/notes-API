const mongoose = require("mongoose");


const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    notes: {
        type: String,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Note", NotesSchema);