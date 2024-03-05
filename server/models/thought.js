const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughts: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
    },
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;