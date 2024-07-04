const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const routes = require("./routers");



dotenv.config();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


const database = process.env.MONGOLAB_URI;
mongoose.connect(database)
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Port listened at ${process.env.PORT} `)
    
})
   

module.exports = app;