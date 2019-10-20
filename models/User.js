const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  journals: [{ type: Schema.Types.ObjectId }],
  votedFor: [{ type: Schema.Types.ObjectId }]
});

module.exports = User = mongoose.model("users", UserSchema);
