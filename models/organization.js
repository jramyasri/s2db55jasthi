const mongoose = require("mongoose")
const organizationSchema = mongoose.Schema({
name: String,
type: String,
noofbranches:  {
    type: Number,
    min: 9,
    max: 88,
require:true  }
})
module.exports = mongoose.model("organization", organizationSchema)