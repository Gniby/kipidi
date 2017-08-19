var mongoose = require('mongoose');

var dbHost = 'mongodb://localhost:27017/kipidi';
mongoose.connect(dbHost);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
  //do operations which involve interacting with DB.
});

 //Create a schema for User Type
  var userSchema = mongoose.Schema({
    user_id				: String,
	user_name			: String,
	user_password		: String,
	user_type			: String
  });
  
 // Model for user 
 exports.User = mongoose.model('user', userSchema);
 
 //Create a schema for User:ADMIN
   var adminSchema = mongoose.Schema({
    first_name			: String,
	middle_name			: String,
    last_name			: String,
    email_id			: String,
    admin_id			: String,
    present_address	    : String,
	permanent_address	: String
  });
  
  // Model for user:ADMIN
 exports.Admin = mongoose.model('admin', userSchema);
 
 //Create a schema for User:Teaching Staff
   var tsSchema = mongoose.Schema({
    first_name			: String,
	middle_name			: String,
    last_name			: String,
    email_id			: String,
    ts_id				: String,
    present_address	    : String,
	permanent_address	: String,
	subjects			: String
	
  });
  // Model for user :Teaching Staff
 exports.Ts = mongoose.model('ts', userSchema);
 
 //Create a schema for User:Non Teaching Staff
   var ntsSchema = mongoose.Schema({
    first_name			: String,
	middle_name			: String,
    last_name			: String,
    email_id			: String,
    nts_id				: String,
    present_address	    : String,
	permanent_address	: String 
  });
   // Model for user :Nonp-Teaching Staff
 exports.Nts = mongoose.model('nts', userSchema);
 
 
 //Create a schema for User:Students
   var studentSchema = mongoose.Schema({
    first_name			: String,
	middle_name			: String,
    last_name			: String,
	DOB					: String,
	place_of_birth		: String,
	sex					: String,
	father_name			: String,
	father_education	: String,
	father_occupation	: String,
	livingnotliving_f	: String,
	mother_name			: String,
	mother_education	: String,
	mother_Occupation	: String,
	livingnotliving_m	: String,
	parents_ann_income	: String,
	dependents			: String,
	present_address	    : String,
	permanent_address	: String,
	guardian_name		: String,
	guardian_address	: String,
	nationality			: String,
	religion			: String,
	caste				: String,
	group				: String,
	sc_st				: String,
	mother_tongue		: String,
	other_lang			: String,
	no_of_brothers		: String,
	no_of_sisters		: String,
	elder_brothers		: String,
	elder_sisters		: String,
	younger_brothers	: String,
	younger_sisters		: String,
	vaccination			: String,
    email_id			: String,
    student_id			: String,
     
  });
    // Model for user :students
 exports.Students = mongoose.model('students', userSchema);
  
  //Create a schema for attendance
  var attendanceSchema = mongoose.Schema({
    student_id			: String,
	student_name		: String,
	class_std			: String,
	no_of_days_attended : String
  });
      // Model for attendance
 exports.Attendance = mongoose.model('attendance', userSchema);
  
  //Create a schema for progress_report
  var prSchema = mongoose.Schema({
    student_id			: String,
	student_name		: String,
	class_std			: String,
	ts_id				: String,
	no_of_days_attended : String,
	grade				: String
  });
        // Model for progress_report
 exports.Pr = mongoose.model('pr', userSchema);
 
 
  
  //Create a schema for Bus_management
  var busSchema = mongoose.Schema({
    no_of_routes		: String,
	route_name			: String,
	no_of_stages		: String,
	stage_name			: String,
	stage_fee			: String,
	bus_driver			: String,
	bus_no_id			: String,
	bus_fuel			: String,
		
  });
  
          // Model for Bus_management
 exports.Bus = mongoose.model('bus', userSchema);
  
  //Create a schema for Bus_fee
  var busfeeSchema = mongoose.Schema({
    student_id			: String,
	student_name		: String,
	class_std			: String,
	stage_stop			: String,
	bus_fee				: String,
		
  });
            // Model for Bus_fee
 exports.Busfee = mongoose.model('busfee', userSchema);
  
  //Create a schema for fee_management
  var feeSchema = mongoose.Schema({
    student_id			: String,
	student_name		: String,
	class_std			: String,
	total_fee			: String,
	installments		: String,
	fee_paid			: String,
	
  });
  
  //Create a schema for User:Time Table
    var msSchema = mongoose.Schema({
	ts_id				: String,
	ts_name				: String,	
	subject_id			: String,
	subject_name		: String,
	class_std			: String
  });
  
  
  
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
  
  