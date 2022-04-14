const mongoose = require("mongoose")
const organizationSchema = mongoose.Schema({
name: String,
type: String,
noofbranches: Number
})
module.exports = mongoose.model("organization", organizationSchema)