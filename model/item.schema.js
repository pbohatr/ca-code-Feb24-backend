const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    firmId: {
        type: mongoose.Schema.ObjectId,
        ref: "Firm"
    },
    itemName: {
        type: String,
        required: true,
    },
    itemHsn: {
        type: String,
        required: true,
    },
    itemCode: {
        type: String,
        required: true,
    },
    openingQuantity: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    minStock: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: "Category"
    },
    salepriceId: {
        type: mongoose.Schema.ObjectId,
        ref: "Saleprice"
    },
    unitId: {
        type: mongoose.Schema.ObjectId,
        ref: "Unit"
    },
    taxes: {
        type: String,
        required: true,
    },
    
}, {
    timestamps: true
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
