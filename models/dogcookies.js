const mongoose = require("mongoose")
const cookiesSchema = mongoose.Schema({
cookies_name: String,
cookies_for:{
    type : String,
    minlength : 3,
    maxlength :15,
},
cost: {
    type: Number,
    min : 1,
    max : 250,
}

})
module.exports = mongoose.model("dogcookies",
cookiesSchema)