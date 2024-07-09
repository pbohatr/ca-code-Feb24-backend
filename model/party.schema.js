const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partySchema = new Schema({
    firmId: {
        type: mongoose.Schema.ObjectId,
        ref: "Firm"
    },
    partyName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    state: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    gstType: {
        type: String,
        required: true,
    },
    billingAddress: {
        type: String,
    },
    shippingAddress: {
        type: String,
    },
    openingBalance: {
        type: Number,
    },
    asOfDate: {
        type: Date,
    },
    creditLimit: {
        type: Number,
    },
    gstNo: {
        type: String,
        default: "",
    },
    additionalField: [{
        name: {
            type: String,
        },
        value: {
            type: String,
        },
        editable: {
            type: Boolean,
        },
    }],
}, {
    timestamps: true
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;
