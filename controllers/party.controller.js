const express = require('express');
const PartyService = require('../services/party.service');

const PartySave = async (req, res) => {
    try {
        await PartyService.addParty(req.body, req.params.id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    PartySave,
      };