const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cmompanySchema = new Schema({

    name: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    companyName: {
        type: String

    },
},
    {
        timestamps: true
    })

const Company = mongoose.model('Comapny', cmompanySchema);
module.exports = Company;