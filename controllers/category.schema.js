const express = require('express');
const CategoryService = require('../services/party.service');

const CategorySave = async (req, res) => {
    try {
        console.log("req>>>",req.body)
        console.log("reqparams>>>",req.params)
        await CategoryService.addCategory(req.body,req.params.id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    CategorySave,
      };