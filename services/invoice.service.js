const Invoice = require('../model/invoice.schema');
const Firm = require('../model/firm.schema');
const Party = require('../model/party.schema');

let service = {};
service.addInvoice = addInvoice;
service.getAllInvoices = getAllInvoices
service.updateInvoiceDetails = updateInvoiceDetails

async function addInvoice(body, id, companyId) {
    try {
        const existingFirm = await Firm.findById(id);
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        if (existingFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        let invoiceStatus = "Pending";
        if (body.balance === 0) {
            invoiceStatus = "Paid";
        } else if (body.balance === body.total) {
            invoiceStatus = "Unpaid";
        } else if (body.balance < body.total) {
            invoiceStatus = "Partial";
        }

        const party = await Party.findById(body.partyId);
        if (!party) {
            return Promise.reject("Party not found!");
        }
        console.log("party", party)
        // Calculate the new balance
        const newBalance = party.balance + body.balance ;
        // Update the party's balance

        await Party.findByIdAndUpdate(body.partyId, { balance: newBalance });
        await Invoice.create({ ...body, status: invoiceStatus, firmId: existingFirm._id });
        return true;
    } catch (error) {
        return Promise.reject("Unable to create Invoice. Try again later!")
    }
};
async function getAllInvoices(id, companyId) {
    try {
        const getFirm = await Firm.findById(id);
        if (getFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        const allInvoices = await Invoice.find({ firmId: id })
        // console.log("allInvoices",allInvoices)
        return allInvoices;
    } catch (error) {
        return Promise.reject("Unable to get all Invoices data. Try again later!")
    }
};

async function updateInvoiceDetails(params, companyId, body) {
    try {
        const getFirm = await Firm.findById(params.firmId);
        if (!getFirm) {
            return Promise.reject("Firm not found!");
        }
        else {
            if (getFirm.companyId.toString() !== companyId.toString()) {
                return Promise.reject("Not authorized!");
            }
        }
        const data = await Invoice.findOneAndUpdate({ _id: params.id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update Invoice data. Try again later!")
    }
};

module.exports = service;