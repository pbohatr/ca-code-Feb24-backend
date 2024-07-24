const Firm = require('../model/firm.schema');
const Item = require('../model/item.schema');

let service = {};
service.addItem = addItem;
service.getItemDetail = getItemDetail;
service.updateItemDetails = updateItemDetails;
service.deleteItem = deleteItem

async function addItem(body, id, companyId) {
    try {
        console.log("body",body, id, companyId)
        const existingFirm = await Firm.findById(id);
        console.log("existingFirm>>",existingFirm)
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        if (existingFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        if (!body.category) {
            body.category = null;
        }
        if (!body.unitId) {
            body.unitId = null;
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
        const itemDetail = await Item.find({ firmId: id }).populate('unitId').populate('category');
        return itemDetail;
    } catch (error) {
        return Promise.reject("Unable to get all item data. Try again later!")
    }
};

async function updateItemDetails(params, companyId, body) {
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
        const data = await Item.findOneAndUpdate({ _id: params.id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update item data. Try again later!")
    }
};

async function deleteItem(params, companyId) {
    try {
        console.log("params", params)
        console.log(" companyId", companyId)

        const getFirm = await Firm.findById(params.firmId);
        console.log("getFirm", getFirm)

        if (getFirm.companyId.toString() !== companyId.toString()) {
            return Promise.reject("Not authorized!");
        }
        console.log("rrr")
        await Item.findOneAndDelete({ _id: params.id });
        return true;
    } catch (error) {
        return Promise.reject("Unable to get all party data. Try again later!")
    }
};

module.exports = service;