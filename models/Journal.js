const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JournalSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: { type: String },
  authors: { type: String },
  description: { type: String },
  postedBy: { type: Schema.Types.ObjectId },
  votedBy: [{ type: Schema.Types.ObjectId }]
});

module.exports = Journal = mongoose.model("journals", JournalSchema);
