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