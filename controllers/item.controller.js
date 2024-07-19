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

const ItemSave = async (req, res) => {
    try {
        console.log("req>>>>>", req.body, req.params.id)
        await ItemService.addItem(req.body, req.params.id, req.user._id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
};

const getItem = async (req, res) => {
    try {
        const allData = await ItemService.getItemDetail(req.params.id, req.user._id);
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json(error);
    }
}



module.exports = {
    SaletaxSave,
    SalepriceSave,
    ItemSave,
    getItem

};