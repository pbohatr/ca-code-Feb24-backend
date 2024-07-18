const Unit = require('../model/unit.schema');
const Firm = require('../model/firm.schema');


let service = {};
service.addUnit = addUnit;
service.getAllUnits = getAllUnits
service.addSelfUnit = addSelfUnit
service.getSelfUnit = getSelfUnit


async function addUnit(body) {
    try {
        const data = await Unit.create(body);
        return data;
    } catch (error) {
        return Promise.reject("Unable to create Unit. Try again later!")
    }
}

async function getAllUnits() {
    try {
        const unit = await Unit.find();
        console.log("unit",unit)
        return unit;
    } catch (error) {
        return Promise.reject("Unable to find units.")
    }
}

async function addSelfUnit(body, id) {
    try {
        const existingFirm = await Firm.findById({_id:id});
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        const data = await Unit.create({ ...body, firmId: existingFirm._id });
        return data;
    } catch (error) {
        return Promise.reject("Unable to create Unit. Try again later!")
    }
}

async function getSelfUnit(id) {
    console.log(">>>>",id)
    try {
        const existingFirm = await Unit.find({firmId :id});
        if (!existingFirm) {
            return Promise.reject("Firm not found!");
        }
        return existingFirm;
    } catch (error) {
        return Promise.reject("Unable to create Unit. Try again later!")
    }
}


module.exports = service;