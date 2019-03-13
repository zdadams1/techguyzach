const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    "_id": String,
    "session": String
});

const Sessions = mongoose.model("sessionSchema", sessionSchema);

module.exports = Sessions;