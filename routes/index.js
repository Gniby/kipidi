
/*
 * GET home page.
 */
 var mongodb = require('./mongodb');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/** serve jade enabled partials */
exports.partials = function(req, res) {
    res.render('partials/' + req.params.name);
};

exports.getUser = function(req,res){
	 mongodb.User.find({},"",function(err,data){
	 if (err){
		 res.send({"error":"error"});
	 } else{
		 res.send(data);
	 }
  });
};

exports.createUser = function(req,res){
	
};

exports.getUserById = function(req,res){
	
};

exports.updateUser = function(req,res){
	
};
