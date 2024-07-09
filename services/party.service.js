const Party = require('../model/party.schema');
const Firm = require('../model/firm.schema');
const PasswordService = require('./password.service');

let service = {};
service.addParty = addParty;
service.getAllParties = getAllParties;

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
}



module.exports = service;