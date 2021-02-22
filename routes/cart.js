var express = require('express');
var router = express.Router();
var m_storedb = require('../models/m_store_db');

router.patch('/add',async function(req, res, next) {
  var data = req.body
  var customer_id = data.customer_id
  var product_id = data.product_id
  var quantity = data.quantity
  var is_present = await m_storedb.iteminCart(customer_id,product_id)
  if(is_present.length>0){
    var is_inserted = await m_storedb.updateCart(customer_id,product_id,quantity)
  }
  else{
    var is_inserted = await m_storedb.insertCart(customer_id,product_id,quantity)
  }
  if(is_inserted){
    res.status(200).send({"status":true,'msg':"Inserted successfully"})
  }
  else{
    res.status(400).send({"status":false,"msg":'Something went wrong'})
  }
})

router.patch('/remove',async function(req,res,next) {
  var data = req.body
  var customer_id = data.customer_id
  var product_id = data.product_id
  var quantity = data.quantity
  if(quantity == 0){
    var update_cart = await m_storedb.removeItem(customer_id,product_id);
  }
  else{
    var update_cart = await m_storedb.updateCart(customer_id,product_id,quantity)
  }
  if(update_cart){
    res.status(200).send({"status":true,'msg':"Updated successfully"})
  }
  else{
    res.status(400).send({"status":false,"msg":'Something went wrong'})
  }
})

module.exports = router;