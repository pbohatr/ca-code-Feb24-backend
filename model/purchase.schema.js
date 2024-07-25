const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    partyName: { type: String },
    phoneNumber: { type: String },
    // poNo: { type: String },
    // poDate: { type: Date, default: Date.now },
    // eWayBill: { type: String },
    billNumber: { type: String, required: true },
    billDate: { type: Date, default: Date.now },
    time: {
        type: String, default: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
    },
    // paymentTerms: { type: String },
    // dueDate: { type: Date, default: Date.now },
    stateOfSupply: { type: String },
    priceUnitWithTax: { type: Boolean, default: true },
    addDescription: { type: String, default: "Additional description here" },
    discount: {
        discountPercent: { type: Number, default: 0 },
        discountAmount: { type: Number, default: 0 },
    },
    tax: {
        tax: { type: String },
        taxAmount: { type: Number, default: 0 },
    },
    roundOff: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    paid: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
    balanceAmount: { type: Number, default: 0 },
    // sale: [InvoiceItemSchema],
    paymentType: [PaymentTypeSchema],
    // files: {
    //     image: { type: Boolean, default: false },
    //     document: { type: Boolean, default: false },
    // },
});

// Export the Invoice model
const Purchase = mongoose.model('Purchase', PurchaseSchema);
module.exports = Purchase;
