const Firm = require('../model/firm.schema');
const Category = require('../model/category.schema');

let service = {};
service.addCategory = addCategory;
service.getCategory = getCategory
service.getAllCategory = getAllCategory

async function addCategory(body, id) {
    console.log(">>>>",body,id)
    try {
        const existingFirm = await Firm.findById({_id:id});
        console.log("existingFirm",existingFirm)
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
    console.log(">>>>",id)
    try {
        const existingFirm = await Category.find({firmId :id});
        console.log("existingFirm",existingFirm)
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
        console.log("existingFirm",existingFirm)
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        return existingFirm;
    } catch (error) {
        return Promise.reject("Unable to create Category. Try again later!")
    }
}




module.exports = service;