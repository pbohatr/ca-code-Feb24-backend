const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    firmId: {
        type: mongoose.Schema.ObjectId,
        ref: "Firm"
    },
    itemName: { type: String, required: true },
    itemHsn: { type: String },
    selectUnit: {
        baseUnit: { type: String },
        secondaryUnit: { type: String }
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: "Category"
    },
    unitId: {
        type: mongoose.Schema.ObjectId,
        ref: "Unit"
    },
    salePrice: {
        salePrice: { type: Number },
        tax: { type: Boolean, default: false },
        disOnSale: { type: Number },
        discountType: { type: String, default: 'Percentage' }
    },
    wholesalePrice: {
        wholesalePrice: { type: Number },
        tax: { type: Boolean, default: false },
        minimumWholesaleQty: { type: Number }
    },
    purchasePrice: {
        purchasePrice: { type: Number },
        tax: { type: Boolean, default: false }
    },
    taxRate: { type: String },
    stock: {
        openingQuantity: { type: Number },
        atPrice: { type: Number },
        asOfDate: { type: Date, default: Date.now },
        minStockToMaintain: { type: Number },
        location: { type: String }
    }
}, { timestamps: true });

const Party = mongoose.model('Item', itemSchema);
module.exports = Party;