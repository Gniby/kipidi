
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
	 console.log(req.body.data);
  var user = new mongodb.User(req.body.data);	
  //Saving the model instance to the DB
  user.save(function(err){
    if ( err ){ res.send({"status":"error"})}else{
    console.log("User Saved Successfully");
	res.send({"status":"success"});
	}
  });
};

exports.getUserById = function(req,res){
	var id = req.params.id;
	console.log(id);
	 mongodb.User.find({"_id":id},"",function(err,data){
	 if (err){
		 res.send({"status":"error"});
	 } else{
		 res.send(data);
	 }
  });
};

exports.updateUser = function(req,res){
	
};

//admin

exports.getAdmin = function(req,res){
	 mongodb.Admin.find({},"",function(err,data){
	 if (err){
		 res.send({"error":"error"});
	 } else{
		 res.send(data);
	 }
  });
};

exports.createAdmin = function(req,res){
	 console.log(req.body.data);
  var admin = new mongodb.Admin(req.body.data);	
  //Saving the model instance to the DB
  admin.save(function(err){
    if ( err ){ res.send({"status":"error"})}else{
    console.log("admin Saved Successfully");
	res.send({"status":"success"});
	}
  });
};

exports.getAdminById = function(req,res){
	var id = req.params.id;
	console.log(id);
	 mongodb.Admin.find({"admin_id":id},"",function(err,data){
	 if (err){
		 res.send({"status":"error"});
	 } else{
		 res.send(data);
	 }
  });
};

exports.updateAdmin = function(req,res){
	
};


//TS

exports.getTs = function(req,res){
	 mongodb.Ts.find({},"",function(err,data){
	 if (err){
		 res.send({"error":"error"});
	 } else{
		 res.send(data);
	 }
  });
};

exports.createTs = function(req,res){
	 console.log(req.body.data);
  var ts = new mongodb.Ts(req.body.data);	
  //Saving the model instance to the DB
  ts.save(function(err){
    if ( err ){ res.send({"status":"error"})}else{
    console.log("Ts Saved Successfully");
	res.send({"status":"success"});
	}
  });
};

exports.getTsById = function(req,res){
	var id = req.params.id;
	console.log(id);
	 mongodb.Admin.find({"ts_id":id},"",function(err,data){
	 if (err){
		 res.send({"status":"error"});
	 } else{
		 res.send(data);
	 }
  });
};

exports.updateTs = function(req,res){
	
};