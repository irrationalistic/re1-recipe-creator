var User = require('../models/users.js');

var memberController = {

	recipeBox: function(req, res){
		res.render('recipe-box');
	},

	memberAdd: function(req, res){
		var userData = req.body;
		var user = new User({
			firstName: userData.firstName,
			lastName: userData.lastName,
			email: userData.email,
			password: userData.password
		});

		user.save(function(err, results){
			res.send(userData);
		});

	}
};

module.exports = memberController;