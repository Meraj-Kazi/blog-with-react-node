const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", CommentsSchema);
