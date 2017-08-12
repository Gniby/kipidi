var mongoose = require('mongoose');

var dbHost = 'mongodb://localhost:27017/kipidi';
mongoose.connect(dbHost);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
  //do operations which involve interacting with DB.
});

 //Create a schema for Book
  var userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email_id: String,
    id: String,
	user_name:String,
	password:String,
	type:String
  });
  
 exports.User = mongoose.model('user', userSchema);
  
 /* 
   var user1 = new User({
    first_name: "girsh",
    last_name: "l",
    email_id: "gnibygiri@gmail.com",
    id: "sch00001",
	user_name:"giri",
	password:"giri",
	type:"admin"
  });

  //Saving the model instance to the DB
  user1.save(function(err){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
  });

  User.find({},"",function(err,data){
	  
	 console.log(data); 
  });
  
  */
  
  