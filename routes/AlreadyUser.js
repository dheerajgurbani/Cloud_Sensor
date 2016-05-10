/**
 * http://usejsdoc.org/
 */
var mysql = require("mysql");
	var conn = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'mobilesensorclouddb1',
		port : 3306
	});


var ejs = require("ejs");
exports.alreadyUser = function(req, res) {
	console.log(req.body.selectpicker);
	var first = req.param("first_name");
	var last = req.param("last_name");
	var usertype = req.param("usertype");
	var location = req.param("location");
	var email = req.param("email");
	var pwd = req.param("password");
	var mysql = require("mysql");

	var conn = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'mobilesensorclouddb1',
		port : 3306
	});
	conn.connect();
	var insertquery = conn.query(
			"insert into mobilesensorclouddb1.userinformation values"
					+ " ( null,'" + first + "','" + last + "','" + usertype
					+ "','" + location + "','" + email + "','" + pwd + "')",
			function(err, result) {
				console.log(insertquery.sql);
				if (err) {
					console.error(err);
					return;
				}
				res.render('alreadyuser');

			});

};

exports.signin = function(req,res){
	
	var mysql = require("mysql");
	var conn = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'mobilesensorclouddb1',
		port : 3306
	});
	conn.connect();
	var email = req.param("email");
	var pwd = req.param("password");
	var page1;
	var usertype=req.param('usertype'); 
	var email  ;
	if(usertype=='admin')
		page1='admin.ejs';
	
	else if(usertype=='user')
		page1='user.ejs';
	else
		
		//page1='vendor_homepage.ejs';
		page1='vendor_sensor.ejs';
		var insertquery=conn.query("Select * from  mobilesensorclouddb1.userinformation where email= '"+email+"' and password='"+pwd+"'",function(err,results){
		console.log(insertquery.sql);	
		if(err)
		{			
			console.error(err);
			console.log(abc);
			return;
	}
		else{
			ejs.renderFile('./views/'+page1,{data:results},function(err,result){
				if(!err)
				{
					console.log("sbdhjbsjcbjwcjknnnsd cn");
					console.log(results);
					//console.log("11111111111111111111111sbdhjbsjcbjwcjknnnsd cn");
					res.end(result);
				}
			else
				{
				res.end('An error occured');
				console.log(err);
				}
			});
		}
				
		});
	
};

exports.vendorSignUp = function (req,res) {
	
	res.render('VendorSignUp');
};

exports.vendorDetails = function (req,res) {
	
	conn.connect();
	var email = req.param("email");
	var pwd = req.param("password");
	
	//var usertype=req.param('usertype'); 
	//var email;
	
		
		//page1='vendor_homepage.ejs';
		var vendorprofile='vendor_homepage.ejs';
		var insertquery=conn.query("Select * from  mobilesensorclouddb1.userinformation where email= '"+email+"' and password='"+pwd+"'",function(err,results){
		console.log(insertquery.sql);	
		if(err)
		{			
			console.error(err);
			console.log(abc);
			return;
	}
		else{
			ejs.renderFile('./views/'+vendorprofile,{data:results},function(err,result){
				if(!err)
				{
					console.log("sbdhjbsjcbjwcjknnnsd cn");
					console.log(results);
					//console.log("11111111111111111111111sbdhjbsjcbjwcjknnnsd cn");
					res.end(result);
				}
			else
				{
				res.end('An error occured');
				console.log(err);
				}
			});
		}
				
		});

};


exports.vendorMySensor = function (req,res) {
	console.log("list2");
	var q=c.query("select * from team_project_281.vendor_sensor ",function(err,result){
		console.log(q.sql);	
		if(err)
			console.error(err);
		
		else
	//console.log(result);
			

	var lat=[];
	var lng=[];
	var loc=[];
	var id=[];
	for(var i=0;i<result.length;i++)
		{
			lat.push(result[i].lat);
			lng.push(result[i].lng);
			loc.push(result[i].sensor_location);
		id.push(result[i].sensor_id);
			
		}
	//console.error(id);
  res.render('abc',{lat:lat,lng:lng,loc:loc,id:id});			
	});
}