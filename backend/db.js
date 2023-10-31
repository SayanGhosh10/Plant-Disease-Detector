const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/plant?directConnection=true"

const connectTOMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo");
};
module.exports = connectTOMongo;