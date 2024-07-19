const Sale = require('../model/saletax.schema');
const Saleprice = require('../model/saleprice.schema');
const Firm = require('../model/firm.schema');
const Item = require('../model/item.schema');




let service = {};
service.addSaletax = addSaletax;
service.addSaleprice = addSaleprice
service.addItem = addItem




async function addSaletax(body) {
    try {
        const data = await Sale.create(body);
        return data;
    } catch (error) {
        return Promise.reject("Unable to create Unit. Try again later!")
    }
}
async function addSaleprice(body) {
    try {
        const data = await Saleprice.create(body);
        return data;
    } catch (error) {
        return Promise.reject("Unable to create Unit. Try again later!")
    }
}

async function addItem(body, id, companyId) {
    try {
        const existingFirm = await Firm.findById(id);
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        // if (existingFirm.companyId.toString() !== companyId.toString()) {
        //     return Promise.reject("Not authorized!");
        // }
        await Item.create({ ...body, firmId: existingFirm._id });
        return true;
    } catch (error) {
        return Promise.reject("Unable to create Item. Try again later!")
    }
};


module.exports = service;