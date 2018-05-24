function Signup()
{

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var eMail = document.getElementById("eMail").value;
  var passWord = document.getElementById("password").value;
  var confirmPassWord = document.getElementById("cPassword").value;
  //console.log("Firstname"+firstName+"\nLastName"+lastName +"\nEmail" + eMail + "\nPassword" + passWord +"\nConfirm Password" + confirmPassWord);
  var SERVER_URL = "/signup/";
  if ( validateSignUp()) {
  		var url = SERVER_URL + firstName + '/' + lastName + '/' + eMail + '/' + passWord + '/' + confirmPassWord;
  		var jqxhr = $.ajax({
				  method: "GET",
				  url: url,
				  dataType: "json"
				})
			  .done(function(jqXHR, textStatus) {
			    if(jqXHR.responseMessage == "SUCCESS" ) {
			    	alert("Successfully registered. Please login.");
			    //	$("#signUpForm")[0].reset();
         	 	$('#loginTabs').tabs('select', '#login');
        	} /*else if(jqXHR.responseMessage == "USEREXISTS" ) {
        		 alert('User ' + eMail + ' with this email exists already. Please login with this email or change email!');
        	} else {
        		alert( jqXHR.responseMessage);
        	}*/
			  }).fail(function(jqXHR, textStatus ) {
  				alert( "Request failed: " + textStatus );
			  });
  }
 	else {
   console.log('Failed');
  }
  return false;
}
function validateSignUp() {
	var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var eMail = document.getElementById("eMail");
  var passWord = document.getElementById("password");
  var confirmPassWord = document.getElementById("cPassword");
  if(firstName.value == '') {
  	alert("Please enter first name");
  	firstName.focus();
  	return false;
  }
  if(lastName.value == '') {
  	alert("Please enter last name");
  	lastName.focus();
  	return false;
  }
  if(eMail.value == '') {
  	alert("Please enter email");
  	eMail.focus();
  	return false;
  }
  if(passWord.value == '') {
  	alert("Please enter password");
  	passWord.focus();
  	return false;
  }
  if(confirmPassWord.value == '') {
  	alert("Please enter confirm password");
  	confirmPassWord.focus();
  	return false;
  }
  if(!CheckPassword_Strength(passWord)){
  	return false;
  }

	return true;
}
function login() {
	var username   = document.getElementById("Email_id_login").value;
  var password   = document.getElementById("Password_id_login").value;
  var SERVER_URL = "/login/";
  if( username && password ) {
  	var url = SERVER_URL + username + '/' + password;
		var jqxhr = $.ajax( {
				  method: "GET",
				  url: url,
				  dataType: "json"
				})
		  .done(function(jqXHR, textStatus) {
			    if(jqXHR.responseMessage == "SUCCESS" ) {
         	 	window.location= '/home';
        	} else if(jqXHR.responseMessage == "NOUSER" ) {
        		 alert('User ' + username + ' or password is wrong. Please check credentials!');
        	} else {
        		alert( jqXHR.responseMessage);
        	}
			  })
			.fail(function(jqXHR, textStatus ) {
  				alert( "Request failed: " + textStatus );
			 });
	}
  else {
      alert('Please enter credentials!');
  }
  return false;
}
/*
function Signup_old()
{

  var firstName = document.getElementById("First-name_id").value;
  var lastName = document.getElementById("Last-name_id").value;
  var eMail = document.getElementById("Email_address_id").value;
  var passWord = document.getElementById("Password_id").value;
  var confirmPassWord = document.getElementById("Confirm_Password_id").value;
 // CheckPassword_Strength(passWord);
  console.log("Firstname"+firstName+"\nLastName"+lastName +"\nEmail" + eMail + "\nPassword" + passWord +"\nConfirm Password" + confirmPassWord);
  var SERVER_URL = "http://localhost:3000/Signup/";
  if ( firstName && lastName && eMail && passWord && confirmPassWord)
  {
    var xhttp = new XMLHttpRequest();
    var url = SERVER_URL + firstName + '/' + lastName + '/' + eMail + '/' + passWord + '/' + confirmPassWord;
    xhttp.open("GET",url,true);
    xhttp.onreadystatechange = function() {
      if ( xhttp.readyState === 4 && xhttp.status === 200 ) {
         string = xhttp.responseText;
         console.log('stats',xhttp.responseText);
      }
    }
    xhttp.send();
 }
 else {
   console.log('Failed');
  }
}

function login_old() {
    var username   = document.getElementById("Email_id_login").value,
        password   = document.getElementById("Password_id_login").valu       xhttp.open( "GET", url, true );
       xhttp.onreadystatechange = function() {
         if ( xhttp.readyState === 4 && xhttp.status === 200 ) {
            string = xhttp.responseText;
            console.log('fvbdjkfbkf',xhttp.responseText);
         }
       }
       xhttp.send();
    }
    else {
        alert('Please enter credentials!');
    }

}


         }
       }
       xhttp.send();
    }
    else {
        alert('Please enter credentials!');
    }

}

*/
function CheckPassword_Strength(passWord)
{
  var passWord = document.getElementById('password').value;
  var confirmPassWord = document.getElementById('cPassword').value;
      if(passWord.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && passWord.length >= 8 )
      {
        return Checkpassword_confirm(confirmPassWord);
      }
      else
      {
        alert("Your password is not strong,(Should have MixedChars and 8 letters)");
        return false;
      }
      return true;
}



  function Checkpassword_confirm(confirmPassWord)
    {
      var passWord = document.getElementById('password').value;
      var confirmPassWord = document.getElementById('cPassword').value;
      if(passWord == confirmPassWord)
      {
      	console.log("Matched Password");
      }
      else
      {
      	alert("Password Doesn't match");
      	return false;
     	}
     	return true;
    }


    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

      var $this = $(this),
          label = $this.prev('label');

    	  if (e.type === 'keyup') {
    			if ($this.val() === '') {
              label.removeClass('active highlight');
            } else {
              label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
        	if( $this.val() === '' ) {
        		label.removeClass('active highlight');
    			} else {
    		    label.removeClass('highlight');
    			}
        } else if (e.type === 'focus') {

          if( $this.val() === '' ) {
        		label.removeClass('highlight');
    			}
          else if( $this.val() !== '' ) {
    		    label.addClass('highlight');
    			}
        }

    });

    $('.tab a').on('click', function (e) {

      e.preventDefault();

      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      target = $(this).attr('href');

      $('.tab-content > div').not(target).hide();

      $(target).fadeIn(600);

    });
