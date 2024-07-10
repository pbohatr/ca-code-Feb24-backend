const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    firmId: {
        type: mongoose.Schema.ObjectId,
        ref: "Firm"
    },
    categoryName: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
