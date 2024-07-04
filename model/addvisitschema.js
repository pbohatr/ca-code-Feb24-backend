const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const addvisitschema = new Schema({
    purposeofvisit: {
        type: String
    },
	persontomeet: {
        type: String
    },
    arrivaltime : {
        type: String
    },
    departure : {
        type: String
    }
},
{
    timestamps: true
})
const visit = mongoose.model('visits', addvisitschema);
module.exports = visit;