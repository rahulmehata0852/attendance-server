const mongoose = require("mongoose")



const BatchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)



module.exports = mongoose.model("batch", BatchSchema)