const mongoose = require('mongoose');
const Schema =mongoose.Schema;
let Vehicle = new Schema({
    vehicle_type :{
        type:String
    }
});
module.exports= mongoose.model('Vehicle',Vehicle);