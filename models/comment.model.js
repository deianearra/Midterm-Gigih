// models/comment.model.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  videoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
