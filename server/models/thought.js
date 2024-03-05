const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const thoughtSchema = new Schema({
    thought: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
    },
});

const Thought = model('Thought', thoughtSchema);

model.exports = Thought;