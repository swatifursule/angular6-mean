const express = require('express');
const app = express();
const unitRoutes = express.Router();

let Unit = require('../models/Unit');

unitRoutes.route('/add').post(function(req, res) {
  let unit = new Unit(req.body);
  unit.save()
    .then(t => {
      res.status(200).json({'unit' : "unit added successfully"});
      })
    .catch(err => {
      res.status(400).json("unable to save to database");
  });
  });

unitRoutes.route('/').get(function(req, res) {
  Unit.find(function(err, units){
    if(err){
      console.log("Error : ", err);
    }else{
      res.json(units);
    }
  });
});


unitRoutes.route('/edit/:id').get(function(req, res) {
  let id = req.param.id;
  Unit.findById(id, function(err, unit){
    if(err){
      console.log("Error : ", err);
    }else{
      res.json(unit);
    }
  });
});

unitRoutes.route('/delete/:id').get(function(req, res) {
  let id = req.param.id;
  Unit.findByIdAndRemove({_id: id}, function(err, unit){
    if(err){
      console.log("Error : ", err);
    }else{
      res.json("successfully removed");
    }
  });
});

unitRoutes.route('/update/:id').get(function(req, res) {
  let id = req.param.id;
  Unit.findById(id, function(err, unit){
    if (! unit){
      return next(new Error("could not load document"));
    }
    else{
      unit.unit_name = req.body.unit_name;
      unit.unit_price = req.body.unit_price;

      unit.save().then(unit => {
        res.json("update complete")
      }).catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = unitRoutes;
