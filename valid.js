
      
      
  function validatefname() {
            var username = document.getElementById('uname').value;

            var userPattern = /^[a-zA-Z]{3,}$/;

            if (!userPattern.test(username)) {
                alert("Invalid firstname please try again.");
                
                document.getElementById('uname').value = '';
                
                document.getElementById('uname').focus();
                return false; 
            }

            return true;
        }

  function validatelname() {
      var username = document.getElementById('lname').value;

      var userPattern = /^[a-zA-Z]{3,}$/;

      if (!userPattern.test(username)) {
          alert("Invalid lastname please try again.");
          
          document.getElementById('lname').value = '';
          
          document.getElementById('lname').focus();
          return false; 
      }

      return true;
  }

  function validate_email() {
      var email = document.getElementById('emailId').value;

      var emailPattern = /^\S+@\S+\.\S+$/;

      if (!emailPattern.test(email)) {
          alert("Invalid email please try again.");
          
          document.getElementById('emailId').value = '';
          
          document.getElementById('emailId').focus();
          return false; 
      }

      return true; 
  }


    function validatePhoneNumber() {
    var phoneNumber = document.getElementById('phnumber').value;

    var phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber)) {
        alert('Invalid phone number! Please enter a 10-digit number.');
        
          document.getElementById('phnumber').value = '';
        
        document.getElementById('phnumber').focus();
        return false; 
    }

    return true;
}


function validatemessage() {
            var username = document.getElementById('message').value;

            var userPattern =/^[a-zA-Z0-9 ]{3,}$/;

            if (!userPattern.test(username)) {
                alert("Invalid message please try again.");
                
                document.getElementById('message').value = '';
                
                document.getElementById('message').focus();
                return false; 
            }

            return true;
        }


        function validate_submit()
        {
              
          if(validatefname() && validatelname() && validatePhoneNumber() && validate_email() && validatemessage()){

              alert("Message Send Successfuly");
          }
        }
