const express = require('express');
const CompanyService = require('../services/company.service');
const { createSecretToken } = require('../utils/secretToken')

const CompanySave = async (req, res) => {
    try {
        const newUser = await CompanyService.registerUser(req.body);
        if (newUser) {
            const token = await createSecretToken(newUser._id);
            const userData = {
                ...newUser.toObject(), token: token, 
            }
            res.status(201).json({companyData : userData});
        }
        else {
            res.status(400).json({ message: "User registration failed" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await CompanyService.loginUser(email, password);
        if (newUser) {
            const token = await createSecretToken(newUser._id);
            const responseObject = {
                userId: newUser._id,
                token: token,
                name: newUser.name
            };
            res.status(200).json({result: responseObject});
        } else {
            res.status(400).json({ message: "User Login failed" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getFirm = async (req, res) => {
    try {
        console.log("req.user", req.user)
        const firmData = await CompanyService.getFirmById(req.user);
        res.status(200).json(firmData);
    } catch (error) {
        res.status(500).json(error);
    }
}

const addFirm = async (req,res) => {
    try{
        console.log("req.user",req.body)    
            console.log("req.user", req.user)

        const addfirmData = await CompanyService.addFirmNew(req.body,req.user)
        if(addfirmData){
        res.status(201).json({FirmData: addfirmData});
        }else{
            res.status(400).json({ message: "Add company failed" });
        }
    }catch(error){
        res.status(500).json(error);

    }


}


const editFirm = async (req, res) => {
    try {
        console.log("req.body", req.body);
        console.log("req.user", req.user);
        const { id } = req.params;
        console.log("id",id) // Get the firm ID from the request parameters
        const editFirmData = await CompanyService.editFirmData(id, req.body, req.user);
        if (editFirmData) {
            res.status(200).json({ FirmData: editFirmData });
        } else {
            res.status(400).json({ message: "Edit company failed" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};



module.exports = {
    CompanySave,
    Login,
    addFirm,
    getFirm,
    editFirm
};