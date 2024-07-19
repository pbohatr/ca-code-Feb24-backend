const Firm = require('../model/firm.schema');
const Category = require('../model/category.schema');

let service = {};
service.addCategory = addCategory;
service.getCategory = getCategory
service.getAllCategory = getAllCategory

async function addCategory(body, id) {
    try {
        const existingFirm = await Firm.findById({_id:id});
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        const data = await Category.create({ ...body, firmId: existingFirm._id });
        return data;
    } catch (error) {
        return Promise.reject("Unable to create Category. Try again later!")
    }
}

async function getCategory(id) {
    try {
        const existingFirm = await Category.find({firmId :id});
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        return existingFirm;
    } catch (error) {
        return Promise.reject("Unable to create Category. Try again later!")
    }
}
async function getAllCategory() {
    try {
        const existingFirm = await Category.find();
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        return existingFirm;
    } catch (error) {
        return Promise.reject("Unable to create Category. Try again later!")
    }
}


module.exports = service;