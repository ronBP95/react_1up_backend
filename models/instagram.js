const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const instagramPostSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    caption: String,
    imageUrl: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now()
    },
    comments: [commentSchema],
});

const InstagramPost = mongoose.model('InstagramPost', instagramPostSchema);

module.exports = InstagramPost;