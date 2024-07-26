const Party = require('../model/party.schema');
const Firm = require('../model/firm.schema');
const Invoice = require('../model/invoice.schema');


let service = {};
service.addParty = addParty;
service.getAllParties = getAllParties;
service.updatePartyDetails = updatePartyDetails;
service.deleteParty = deleteParty;
service.getAllPartiesSale = getAllPartiesSale

async function addParty(body, id, companyId) {
    try {
        const existingFirm = await Firm.findById(id);
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        if (existingFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        await Party.create({ ...body, firmId: existingFirm._id });
        return true;
    } catch (error) {
        return Promise.reject("Unable to create party. Try again later!")
    }
};

async function getAllParties(id, companyId) {
    try {
        const getFirm = await Firm.findById(id);
        if (getFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        const allParties = await Party.find({ firmId: id });
        return allParties;
    } catch (error) {
        return Promise.reject("Unable to get all party data. Try again later!")
    }
};

async function updatePartyDetails(params, companyId, body) {
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
        const data = await Party.findOneAndUpdate({ _id: params.id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update party data. Try again later!")
    }
};

async function deleteParty(params, companyId) {
    try {
        console.log("params", params)
        console.log(" companyId", companyId)

        const getFirm = await Firm.findById(params.firmId);
        console.log("getFirm",getFirm)

        if (getFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        console.log("rrr")
        await Party.findOneAndDelete({_id: params.id});
        return true;
    } catch (error) {
        return Promise.reject("Unable to get all party data. Try again later!")
    }
};

async function getAllPartiesSale(id, companyId) {
    try {
        // const getFirm = await Firm.findById(id);
        // if (getFirm.companyId.toString() !== companyId.toString()) {
        //     return Promise.reject("Not authorized!");
        // }
        const allParties = await Invoice.find({ partyId: id });
        return allParties;
    } catch (error) {
        return Promise.reject("Unable to get all party data. Try again later!")
    }
};



module.exports = service;