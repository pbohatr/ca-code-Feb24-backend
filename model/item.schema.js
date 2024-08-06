const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    firmId: {
        type: mongoose.Schema.ObjectId,
        ref: "Firm"
    },
    itemName: { type: String, required: true },
    itemHsn: { type: String },
    itemCode: { type: String },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        default: null

    },
    unitId: {
        type: mongoose.Schema.ObjectId,
        ref: "Unit",
        default: null
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
    },
    // seletedUnit: {
    //     baseUnit: { type: String },
    //     secondaryUnit: { type: String }
    // },
}, { timestamps: true });

const Party = mongoose.model('Item', itemSchema);
module.exports = Party;