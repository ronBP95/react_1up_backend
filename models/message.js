const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    content: {
        type: String,
        minLength: 1
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
