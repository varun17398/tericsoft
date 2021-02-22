var express = require('express');
var router = express.Router();
var m_storedb = require('../models/m_store_db');

// MongoClient.connect('mongodb://localhost:27017/users', function (err, client) {
// 	var db = client.db('users')
// })

/* GET users listing. */

router.get('/',async function(req,res, next) {
  id = req.query.product_id
  var product_details = await m_storedb.getProductDetails(id)
  if(product_details.length > 0){
    res.status(200).send({status:true,data:product_details})
  }
  else{
    res.status(200).send({status:true,data:[]})
  }
});

module.exports = router;