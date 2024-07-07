const Company = require('../model/company.schema');
const PasswordService = require('./password.service');

let service = {};
service.registerUser = registerUser

async function registerUser(body) {
    try {
        const existingUser = await Company.findOne({ email: body.email });
        if (existingUser) {
            return Promise.reject("Account already exists!");
        } else {
            const encryptedPassword = PasswordService.passwordEncryption(body.password);
            body.password = encryptedPassword;
            const user = await Company.create(body);
            return user;
        }
    } catch (error) {
        return Promise.reject("Unable to create Account. Try again later!")
    }
}

module.exports = service;