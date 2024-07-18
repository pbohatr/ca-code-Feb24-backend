const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitsSchema = new Schema({
    firmId: {
        type: mongoose.Schema.ObjectId,
        ref: "Firm"
    },
    unitName: {
        type: String,
        required: true,
    },
    shortName: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Unit = mongoose.model('Unit', unitsSchema);
module.exports = Unit;
