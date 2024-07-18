const express = require('express');
const ItemService = require('../services/item.service');

const SaletaxSave = async (req, res) => {
    try {
        const unitData = await ItemService.addSaletax(req.body);
        res.status(200).send(unitData);
    } catch (error) {
        res.status(500).json(error);
    }
};
const SalepriceSave = async (req, res) => {
    try {
        const unitData = await ItemService.addSaleprice(req.body);
        res.status(200).send(unitData);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    SaletaxSave,
    SalepriceSave
    
      };