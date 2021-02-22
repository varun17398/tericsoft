var knex = require('./connector');

module.exports = {
	insertCart: function(customer_id,product_id,quantity){
		query = "INSERT INTO carts (customer_id,product_id,quantity) VALUES(?,?,?)";
		return new Promise(function (resolve, reject){
			knex.raw(query, [customer_id,product_id,quantity]).then(function (result){
				resolve(result);
			});
		});
	},
	iteminCart: function(customer_id,product_id){
		query = "SELECT * FROM carts WHERE customer_id=? AND product_id=?"
		return new Promise(function (resolve, reject){
			knex.raw(query, [customer_id,product_id]).then(function (result){
				resolve(result);
			});
		});
	},
	updateCart: function(customer_id,product_id,quantity){
		query = "UPDATE carts SET quantity=? WHERE customer_id=? AND product_id=?";
		return new Promise(function (resolve, reject){
			knex.raw(query, [quantity,customer_id,product_id]).then(function (result){
				resolve(result);
			});
		});
	},
	removeItem: function(customer_id,product_id){
		query = "DELETE FROM carts WHERE customer_id=? AND product_id=?";
		return new Promise(function (resolve, reject){
			knex.raw(query, [customer_id,product_id]).then(function (result){
				resolve(result);
			});
		});
	},
	getProductDetails: function(id){
		query = "SELECT * FROM products WHERE id=?"
		return new Promise(function (resolve, reject){
			knex.raw(query, [id]).then(function (result){
				resolve(result);
			});
		});
	},
	addAddress: function(customer_id,address){
		query = "INSERT INTO address (customer_id,address) VALUES(?,?)";
		return new Promise(function (resolve, reject){
			knex.raw(query, [customer_id,address]).then(function (result){
				resolve(result);
			});
		});
	},
	editAddress: function(address_id,address){
		query = "UPDATE address SET address=? WHERE id=?";
		return new Promise(function (resolve, reject){
			knex.raw(query, [address,address_id]).then(function (result){
				resolve(result);
			});
		});
	},
	removeAddress: function(address_id){
		query = "DELETE FROM address WHERE id=?";
		return new Promise(function (resolve, reject){
			knex.raw(query, [address_id]).then(function (result){
				resolve(result);
			});
		});
	},
	getAddress: function(customer_id){
		query = "SELECT * FROM address WHERE customer_id=?"
		return new Promise(function (resolve, reject){
			knex.raw(query, [customer_id]).then(function (result){
				resolve(result);
			});
		});
	},
	getOrders: function(customer_id){
		query = "SELECT * FROM orders WHERE customer_id=?"
		return new Promise(function (resolve, reject){
			knex.raw(query, [customer_id]).then(function (result){
				resolve(result);
			});
		});
	},
	insertOrder: function(customer_id,order_details){
		query = "INSERT INTO orders (customer_id,order_details) VALUES (?,?)"
		return new Promise(function (resolve, reject){
			knex.raw(query, [customer_id,order_details]).then(function (result){
				resolve(result);
			});
		});
	},
	getItems: function(query_text){
		query = "SELECT * FROM products WHERE name LIKE '%?%' AND quantity > 0";
		return new Promise(function (resolve, reject){
			knex.raw(query, [query_text]).then(function (result){
				resolve(result);
			});
		});
	}
}