var express = require('express');
var router = express.Router();
var m_storedb = require('../models/m_store_db');


router.get('/',async function(req, res, next) {
	var customer_id = req.query.customer_id
	var listAddress = await m_storedb.getAddress(customer_id)
	if(listAddress.length > 0){
		res.status(200).send({"status":true,"data":listAddress})
	}
	else{
		res.status(200).send({"status":true,"data":[]})
	}
})


router.post('/add',async function(req, res, next) {
	var data = req.body
	var customer_id = data.customer_id
	var address = data.address
	var addAddress = await m_storedb.addAddress(customer_id,address);
	if(addAddress){
		res.status(200).send({"status":true,"msg":"Address has benn added"})
	}
	else{
		res.status(400).send({"status":false,"msg":"Something went wrong"})
	}
})

router.patch('/edit',async function(req, res, next) {
	var data = req.body
	var address_id = data.address_id
	var address = data.address
	var addAddress = await m_storedb.editAddress(address_id,address);
	if(addAddress){
		res.status(200).send({"status":true,"msg":"Address has benn added"})
	}
	else{
		res.status(400).send({"status":false,"msg":"Something went wrong"})
	}
})

router.delete('/remove',async function(req, res, next) {
	var data = req.body
	var address_id = data.address_id
	var addAddress = await m_storedb.addAddress(customer_id,address);
	if(addAddress){
		res.status(200).send({"status":true,"msg":"Address has benn added"})
	}
	else{
		res.status(400).send({"status":false,"msg":"Something went wrong"})
	}
})

module.exports = router;
