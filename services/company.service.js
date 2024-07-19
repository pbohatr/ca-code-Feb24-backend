const Company = require('../model/company.schema');
const Firm = require('../model/firm.schema');
const PasswordService = require('./password.service');

let service = {};
service.registerUser = registerUser;;
service.loginUser = loginUser;
service.getFirmById = getFirmById;
service.addFirmNew = addFirmNew;
service.editFirmData = editFirmData

async function registerUser(body) {
    try {
        const existingUser = await Company.findOne({ email: body.email });
        if (existingUser) {
            return Promise.reject("Account already exists!");
        }
        else {
            const encryptedPassword = PasswordService.passwordEncryption(body.password);
            body.password = encryptedPassword;
            const user = await Company.create(body);
            const firm = await Firm.create({
                email: body.email,
                companyName: body.companyName,
                acceptTerms: true,
                companyId: user._id
            });
            return user;
        }
    } catch (error) {
        return Promise.reject("Unable to create Account. Try again later!")
    }
}

async function loginUser(email, password) {
    try {
        const existingUser = await Company.findOne({ email: email });
        if (!existingUser) {
            return Promise.reject("Account does not exist");
        }
        const decryptedPassword = await PasswordService.passwordDecryption(existingUser.password);
        if (decryptedPassword === password) {
            return existingUser;
        } else {
            return Promise.reject("Incorrect Password");
        }
    } catch (error) {
        return Promise.reject("Login failed. Try again later!")
    }
}

async function getFirmById(body) {
    try {
        const allCompanies = await Firm.find({ companyId: body._id });
        if (!allCompanies) {
            return Promise.reject("Comapny data not found!");
        }
        return allCompanies;
    } catch (error) {
        return Promise.reject("Unable to get company data. Try again later!")
    }
}

async function addFirmNew(body, user) {
    try {
        const addCompany = await Firm.create({ ...body, companyId: user?._id });
        return addCompany;
    } catch (error) {
        console.error("Error creating company:", error);
        return Promise.reject("Unable to add company. Try again later!");
    }

}
async function editFirmData(id, body, user) {
    try {
        const getComapny = await Company.findById(user._id);
        if (!getComapny) {
            return Promise.reject("Not authorized!");
        }
        const editCompany = await Firm.findOneAndUpdate({ _id: id }, body, { new: true });
        if (!editCompany) {
            return Promise.reject("Comapny data not found!");
        }
        return editCompany;
    } catch (error) {
        return Promise.reject("Unable to edit company. Try again later!");
    }
}



module.exports = service;