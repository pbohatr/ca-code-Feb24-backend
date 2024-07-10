const Firm = require('../model/firm.schema');
const Category = require('../model/category.schema');

let service = {};
service.addCategory = addCategory;;

async function addCategory(body, id) {
    try {
        const existingFirm = await Firm.findById({_id:id});
        console.log("existingFirm",existingFirm)
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        await Category.create({ ...body, firmId: existingFirm._id });
        return true;
    } catch (error) {
        return Promise.reject("Unable to create Category. Try again later!")
    }
}



module.exports = service;