const express = require('express');
const UserService = require('../services/user.service');
const { createSecretToken } = require('../utils/secretToken')

const userSave = async (req, res) => {
    try {
        const newUser = await UserService.registerUser(req.body);
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
    userSave
};