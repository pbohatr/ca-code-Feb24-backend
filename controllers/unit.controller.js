const express = require('express');
const UnitService = require('../services/unit.service');

const UnitSave = async (req, res) => {
    try {
        const unitData = await UnitService.addUnit(req.body);
        res.status(200).send(unitData);
    } catch (error) {
        res.status(500).json(error);
    }
};
const getUnit = async (req, res) => {
    try {
        const categoryData = await UnitService.getAllUnits();
        // console.log("categoryData",categoryData)
        res.status(200).send(categoryData);
    } catch (error) {
        res.status(500).json(error);
    }
}

const UnitSelfSave = async (req, res) => {
    try {
        const unitData = await UnitService.addSelfUnit(req.body,req.params.id);
        res.status(200).send(unitData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getSelfUnit = async (req, res) => {
    try {
        const {id} = req.params
        // console.log("reqparams>>>",{id})
        const unitData = await UnitService.getSelfUnit(req.params.id);
        res.status(200).send(unitData);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    UnitSave,
    getUnit,
    UnitSelfSave,
    getSelfUnit
      };