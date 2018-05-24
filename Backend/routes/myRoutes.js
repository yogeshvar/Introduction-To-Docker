var fs       = require("fs");
var config   = require("../config.js");
var myRoutes = {};


myRoutes.signup = function(req,res)
{
  var userInfo = {};
  var response = {};
	var userAvail = "FALSE";
  try
  {
    userInfo.FirstName = req.params.fname;
    userInfo.LastName = req.params.lname;
    userInfo.Email = req.params.email;
    userInfo.Password = req.params.pswd;
    userInfo.ConfirmPassword = req.params.cpswd;
		console.log(JSON.stringify(userInfo));
		var userData = {};
		var rUsername = userInfo.Email;
	 	fs.readFile(config.signUpInfo, function (err, data) {
	    		if (err) throw err;
			    userData = JSON.parse(data);
			    for(var i in userData.users)
					{
					     var jEmail = userData.users[i].Email;
					     if(rUsername === jEmail) {
					     		userAvail = "TRUE";
					     		break;
					     }
					}
					if(userAvail == "FALSE") {
			    	userData.users.push(userInfo);
			    	fs.writeFile(config.signUpInfo, JSON.stringify(userData), function(err) {
							if (err) throw err;
							response.responseMessage = 'SUCCESS';
							response.responseStatus  = 200;
							res.send(response);
						});
					} else {
							response.responseMessage = 'USEREXISTS';
							response.responseStatus  = 200;
							res.send(response);
					}	
		});	   
		
	  /*fs.appendFile(config.signUpInfo, JSON.stringify(userInfo), function(err){
	    if (err) throw err;
	    console.log('Signed up');
	  });
	  */
	
	}
	catch(err) {
		console.log('Server error:', err);
		response.responseMessage = 'Internal server error';
		response.responseStatus  = 200;
		res.send(response);
	}

};


//to check login based on parameters
myRoutes.login = function(req, res) {
  var userInfo = {};
  var response = {};
	var message = "NOUSER";
  try {

    rUsername = req.params.username;
    rPassword = req.params.password;

    fs.readFile(config.signUpInfo, function (err, data) {
    		if (err) throw err;
		    var userData = JSON.parse(data);
		    for(var i in userData.users)
				{
				     var jEmail = userData.users[i].Email;
				     var jPassword = userData.users[i].Password;
				     if(rUsername === jEmail && rPassword === jPassword) {
				     		message = "SUCCESS";
				     		break;
				     }
				}
      response.responseMessage = message;
      response.responseStatus  = 200;
      res.send(response);
		});
  }
  catch(err) {
    console.log('Server error:', err);
    response.responseMessage = 'Internal server error';
    response.responseStatus  = 200;
    res.send(response);
  }

};

//to check login based on parameters
myRoutes.home = function(req, res) {
	var homePage = "/main.html";
  try {
      res.redirect(homePage);
  }
  catch(err) {
	    console.log('Server error:', err);
  }

};
//to display default error message for incorrect routes
myRoutes.defaultPage = function(req, res) {
 res.send('Error: 404, Page not found :-(');
};

module.exports = myRoutes;
