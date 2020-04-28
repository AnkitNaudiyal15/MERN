const mongoose = require('mongoose');
const Schema =mongoose.Schema;
let Vehicle = new Schema({
    vehicletype :{
        type: String
    }
},{
    collection: 'vehicle'
});
module.exports= mongoose.model('Vehicle',Vehicle);