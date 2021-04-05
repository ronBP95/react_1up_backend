const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    content: {
        type: String,
        minLength: 1
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;