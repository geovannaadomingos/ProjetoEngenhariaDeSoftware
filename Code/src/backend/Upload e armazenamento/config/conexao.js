const mongoose = require("mongoose")
const uri = "mongodb://localhost:27017/apnp"

mongoose.connect(uri)

module.exports = mongoose