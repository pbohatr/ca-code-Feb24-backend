const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saletaxSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Saletax = mongoose.model('Saletax', saletaxSchema);
module.exports = Saletax;
