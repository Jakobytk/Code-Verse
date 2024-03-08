const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    Thoughts: {
        type: String,
        require: true,
    }
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;