const Sale = require('../model/saletax.schema');
const Saleprice = require('../model/saleprice.schema');



let service = {};
service.addSaletax = addSaletax;
service.addSaleprice = addSaleprice



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


module.exports = service;