const mongoose = require("mongoose")



const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batchId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "batch"
    },
},
    {
        timestamps: true
    }
)



module.exports = mongoose.model("student", StudentSchema)