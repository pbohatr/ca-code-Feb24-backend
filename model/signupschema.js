const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({

    phone: {
        type: String,
    },
    otp: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String

    },
    company: {
        type: String

    },
    address: {
        type: String

    },
    city: {
        type: String

    },
    photo: {
        type: String

    },
    aadharcard: {
        type: String
    },
    idcardnumber: {
        type: String
    },
    purposeofvisit: {
        type: String
    },
	persontomeet: {
        type: String
    },
    arrivaltime : {
        type: String
    }

},
    {
        timestamps: true
    })

const visitors = mongoose.model('visitors', signupSchema);
module.exports = visitors;