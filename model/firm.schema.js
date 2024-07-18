const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firmSchema = new Schema({
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    companyName: {
        type: String
    },
    acceptTerms: {
        type: Boolean
    },
    companyLogo: {
        type: String
    },
    signature: {
        type: String
    },
    gstinNumber: {
        type: String
    },
    businessAddress: {
        type: String
    },
    pinCode: {
        type: Number
    },
    state: {
        type: String
    },
    businessDescription: {
        type: String
    },
    businessType: {
        type: String
    },
    businessCategory: {
        type: String
    },
    companyId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },

},
    {
        timestamps: true
    })

const Firm = mongoose.model('Firm', firmSchema);
module.exports = Firm;