const express = require('express');
const CompanyService = require('../services/company.service');
const { createSecretToken } = require('../utils/secretToken')

const CompanySave = async (req, res) => {
    try {
        const newUser = await CompanyService.registerUser(req.body);
        if (newUser) {
            const token = await createSecretToken(newUser._id);
            const userData = {
                ...newUser.toObject(), token: token
            }
            res.status(201).json(userData);
        }
        else {
            res.status(400).json({ message: "User registration failed" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    CompanySave
};