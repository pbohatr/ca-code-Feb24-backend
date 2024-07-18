const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salepriceSchema = new Schema({
    sale: {
        value: { type: String },
        type: { type: mongoose.Schema.ObjectId, ref: "Saletax" }
    },
    percentage: {
        value: { type: String },
        type: { type: mongoose.Schema.ObjectId, ref: "Saletax" }
    },
    purchase: {
        value: { type: String },
        type: { type: mongoose.Schema.ObjectId, ref: "Saletax" }
    }
}, {
    timestamps: true
});

const Saleprice = mongoose.model('Saleprice', salepriceSchema);
module.exports = Saleprice;
