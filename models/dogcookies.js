const mongoose = require("mongoose")
const cookiesSchema = mongoose.Schema({
cookies_name: String,
cookies_for: String,
cost: Number
})
module.exports = mongoose.model("dogcookies",
cookiesSchema)