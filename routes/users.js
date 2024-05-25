var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return db.User.findAll({
    where: {}
  })
  .then(users => res.send(users))
  .catch(err =>{
    return res.send(err)
  })
});

router.post('/', function(req,res,next){

  return db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then( data => res.status(201).send(data))
  .catch(error => res.send(error))


});

module.exports = router;
