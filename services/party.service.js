const Party = require('../model/party.schema');
const Firm = require('../model/firm.schema');

let service = {};
service.addParty = addParty;;

async function addParty(body, id) {
    try {
        const existingFirm = await Firm.findById(id);
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        await Party.create({ ...body, firmId: existingFirm._id });
        return true;
    } catch (error) {
        return Promise.reject("Unable to create party. Try again later!")
    }
}



module.exports = service;