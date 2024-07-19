const Firm = require('../model/firm.schema');
const Item = require('../model/item.schema');

let service = {};
service.addItem = addItem;
service.getItemDetail = getItemDetail;

async function addItem(body, id, companyId) {
    try {
        const existingFirm = await Firm.findById(id);
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        if (existingFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        await Item.create({ ...body, firmId: existingFirm._id });
        return true;
    } catch (error) {
        return Promise.reject("Unable to create Item. Try again later!")
    }
};

async function getItemDetail(id, companyId) {
    try {
        const getFirm = await Firm.findById(id);
        if (!getFirm) {
            return Promise.reject("Firm not found!");
        }
        if (getFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        const itemDetail = await Item.find({ firmId: id });
        return itemDetail;
    } catch (error) {
        return Promise.reject("Unable to get all item data. Try again later!")
    }
};

module.exports = service;