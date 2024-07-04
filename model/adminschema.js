const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({

    email: {
        type: String,
        require:true
        
    }, 
    password: {
        type: String,
        require:true

    }
},
    {
        timestamps: true
    })

const adminlogin = mongoose.model('adminlogin', adminSchema);
module.exports = adminlogin;