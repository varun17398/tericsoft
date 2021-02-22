var express = require('express');
var router = express.Router();
var m_storedb = require('../models/m_store_db');

router.get('/',async function(req, res, next) {
	var query_text = req.query.query_text
	var items = await m_storedb.getItems(query_text)
	if(items.length > 0){
		res.status(200).send({"status":true,'data':orders})
	}
	else{
		res.status(200).send({"status":true,'data':[]})
	}
})