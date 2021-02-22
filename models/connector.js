// var express = require('express');
// var router = express.Router();
// var MongoClient = require('mongodb').MongoClient

// class dbConn{
// 	contructor(){
// 		this.db_conn = null;
// 	}
// 	get_db_client() {
// 		this.db_conn = MongoClient.connect('mongodb://localhost:27017/users')
// 		return this.db_conn
// 	}
// }

var mysql      = require('mysql');
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : 'root@123',
        database : 'prod_db'
    }
});

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.send('inside dbconn');
// 	MongoClient.connect('mongodb://localhost:27017/users', function (err, client) {
// 	  if (err) throw err

// 	  var db = client.db('users')

// 	  db.collection('customers').find({"email":"test@test.com"}).toArray(function (err, result) {
// 	    if (err) throw err

// 	    console.log(result)
// 	  })
// 	})
// });

module.exports = knex;