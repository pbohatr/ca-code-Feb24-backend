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
            res.status(200).json({ data: responseObject });
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

module.exports = {
    CompanySave,
    Login,
    getFirm
};