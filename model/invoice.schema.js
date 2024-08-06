const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  firmId: {type: mongoose.Schema.ObjectId,ref: "Firm"},
  partyId: {type: mongoose.Schema.ObjectId,ref: "Party"},
  type: { type: String },
  status: { type: String, default: "Pending" },
  customerName: { type: String },
  billingAddress: { type: String },
  billingName: { type: String },
  phoneNumber: { type: String },
  invoiceNumber: { type: String, required: true },
  invoiceDate: { type: Date, default: Date.now },
  time: { type: String },
  stateOfSupply: { type: String },
  priceUnitWithTax: { type: Boolean, default: false },
  addDescription: { type: String },
  total: { type: Number, default: 0 },
  received: { type: Number, default: 0 },
  balance: { type: Number, default: 0 },
  sale: [{
    itemName: { type: String },
    mainName: { type: String },
    qty: { type: Number },
    unit: { type: String },
    priceUnit: { type: Number },
    discountPercent: { type: Number },
    discountAmount: { type: Number },
    taxPercent: { type: Number },
    taxAmount: { type: Number },
    amount: { type: Number }
  }],
  paymentType: [{
    types: { type: String },
    amount: { type: Number },
    referenceNo: { type: String }
  }]
  
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', InvoiceSchema);
module.exports = Invoice;
