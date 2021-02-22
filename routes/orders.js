var express = require('express');
var router = express.Router();
var m_storedb = require('../models/m_store_db');

router.get('/',async function(req, res, next) {
	var customer_id = req.query.customer_id
	var orders = await m_storedb.getOrders(customer_id)
	if(orders.length > 0){
		res.status(200).send({"status":true,'data':orders})
	}
	else{
		res.status(200).send({"status":true,'data':[]})
	}
})

router.post('/confirmOrder',async function(req, res, next) {
	var data = req.body
	var order_details = data.order_details
	var customer_id = data.customer_id
	var insert_order = await m_storedb.insertOrder(customer_id,order_details)
	if(insert_order){
		res.status(200).send({"status":true,'msg':"Order confirmed"})
	}
	else{
		res.status(400).send({"status":true,'msg':'Something went wrong. Please place your order again'})
	}
})