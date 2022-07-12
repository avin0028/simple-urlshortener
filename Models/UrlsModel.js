const mongoose = require("mongoose");

const urlsSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shorted: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("urls", urlsSchema);
