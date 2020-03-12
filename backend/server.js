const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const cors = require('cors');
const mongoose =require('mongoose');
const vehicleRoutes = express.Router();
const PORT = 4000;
let Vehicle = require('.vehicle.model')
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/parking',{useNewUrlParser:true})
const connection =mongoose.connection;
connection.once('open',function(){
    console.log("mongoo data base connection estableished");
})
app.listen(PORT,function(){
    console.log("server is running on the port" + PORT);
});