const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const cors = require('cors');
const mongoose =require('mongoose');
const vehicleRoutes = express.Router();
const PORT = 4000;
 let Vehicle = require('./vehicle.model');
/* middleware for the request */
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/parking',{useNewUrlParser:true})
const connection = mongoose.connection;
 connection.once('open',function(){
     console.log("mongoo data base connection estableished");
 });
 vehicleRoutes.route('/').get(function(req, res){
    Vehicle.find(function(err ,vechile){
            if(err){
                console.log(err);
            }
            else{
                res.json(vechile);
            }
    });
 });

//  vehicleRoutes.route('/:id').get(function(req, res){
//      let id = req.params.id;
//     Vehicle.findById(id, function(err ,vechile){
          
//                 res.json(vechile);
//     });
//  });

 vehicleRoutes.route('/create').post(function(req, res){
  let vechile = new Vehicle(req.body);
  vechile.save()
  .then(vechile => {
      res.status(200).json({'vechile':'vechile added successfully'});
  }).catch(err => {
      res.status(400).send('adding new vechile fail');
  });  
});


 vehicleRoutes.route('update/:id').get(function(req, res){
     let id = req.params.id;
    Vehicle.findById(id, function(err ,vechile){
          if(!vechile){
              res.status(404).send('Data not found');
          }
          else{
              vechile.vehicle_type=req.body.vechicle.type;
              vechile.save().then(vechile => {
                  res.json('vechile udpated');
              })
              .catch(err => {
                  res.status(404).send("update not possible");
              });
          }
    });
 });
 app.use('/vechile',Vehicle);

app.listen(PORT,function(){
    console.log("server is running on the port" + PORT);
});