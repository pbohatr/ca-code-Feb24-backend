const Firm = require('../model/firm.schema');
const Category = require('../model/category.schema');

let service = {};
service.addCategory = addCategory;
service.getCategory = getCategory
service.getAllCategory = getAllCategory
service.deleteCategory = deleteCategory
service.updateCategorydetails = updateCategorydetails

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

async function updateCategorydetails(params, companyId, body) {
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
        const data = await Category.findOneAndUpdate({ _id: params.id }, body, { new: true });
        return data;
    } catch (error) {
        return Promise.reject("Unable to update party data. Try again later!")
    }
}

async function deleteCategory(id) {
    try {
        console.log("id", id)
        const category = await Category.find({ firmId: id });
        console.log("category", category)
        if (!category) {
            return Promise.reject("Category not found!");
        }
        await Category.findByIdAndDelete(category);
        return { message: "Category deleted successfully!" };
    } catch (error) {
        return Promise.reject("Unable to delete Category. Try again later!");
    }
}



module.exports = service;