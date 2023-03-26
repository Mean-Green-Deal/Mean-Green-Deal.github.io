const firebaseConfig = {
    apiKey: "AIzaSyAFvVTARYzQrWvE9OXCTY3JV3o9SxHbJ7U",
    authDomain: "mean-green-deal-726f9.firebaseapp.com",
    projectId: "mean-green-deal-726f9",
    storageBucket: "mean-green-deal-726f9.appspot.com",
    messagingSenderId: "747867835951",
    appId: "1:747867835951:web:084db4a1feb703eafe00da",
    measurementId: "G-2QKNB5QXF4"
    };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     // Initialize variables
     const auth = firebase.auth()
     const database = firebase.database()

     function login() {
      var email = document.getElementById("email").value
      var password = document.getElementById("password").value
  
      if (validate_email(email) == false || validate_password(password) == false) {
          alert('Email or Password is Outta Line!!')
          return
          // Don't continue running the code
        }
      
        auth.signInWithEmailAndPassword(email, password)
        .then(function() {
          // Declare user variable
          var user = auth.currentUser
      
          // Add this user to Firebase Database
          var database_ref = database.ref()
      
          // Create User data
          var user_data = {
            last_login : Date.now()
          }
      
          // Push to Firebase Database
          database_ref.child('users/' + user.uid).update(user_data)
      
          // DOne
          alert('User Logged In!!')
          window.location.href = "https://mean-green-deal.github.io/content/userloggedin.html";
      })
          .catch(function(error) {
              // Firebase will use this to alert of its errors
          
              alert(error.message)
              window.location.href = "https://mean-green-deal.github.io";
            })
      /*
      for (i = 0; i <LoginInfo.length; i++) {
          if (username == LoginInfo[i].username && password == LoginInfo[i].password) {
              alert(username + " is logged in")
            //FB
            auth.signInWithEmailAndPassword(username, password)
            .then(function() {
              // Declare user variable
              var user = auth.currentUser
  
              // Add this user to Firebase Database
              var database_ref = database.ref()
  
              // Create User data
              var user_data = {
                last_login : Date.now()
              }
              // Push to Firebase Database
              database_ref.child('users/' + user.uid).update(user_data)
            })
            .catch(function(error) {
              // Firebase will use this to alert of its errors
              var error_code = error.code
              var error_message = error.message
  
              alert(error_message)
            })
             window.location.href = "https://mean-green-deal.github.io/";
              return
          }
      }
      */
      //console.log("incorrect username or password")
  }
  
  function registerUser() {
    var registerUser = document.getElementById("newUser").value
    var registerEmail = document.getElementById("newEmail").value
    var registerPassword = document.getElementById("newPassword").value
    var registerConfirmPassword = document.getElementById("confirmPassword").value
    auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        registerEmail : registerEmail,
        registerUser : registerUser,
        last_login : Date.now()
      }
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    })
    expression = /^[^@]+@\w+(\.\w+)+\w$/

    if (expression.test(email) == false || password < 6) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
      //FB
      /*
      auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then(function(userCredential) {
          const user = userCredential.user;
          const usersRef = db.collection('users');
          var user_data = {
              registerEmail : registerEmail,
              registerUser : registerUser,
              last_login : Date.now()
            };
            usersRef.add(user_data)
          
        })
          /*
        // Declare user variable
        
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          registerEmail : registerEmail,
          registerUser : registerUser,
          last_login : Date.now()
        }
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)
        
      })
      
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        alert("error with fb database")
        var error_code = error.code
        var error_message = error.message
        alert(error_message)
      })
      */
      //FB
  
  ///////////////////////////////Valid Credentials ///////////////////////////////////////////
  
  if (registerUser.length < 3) return alert("That username is too short.";
  
  else if (registerEmail.length < 3) return alert("That email is too short.");
  
  else if(emailRegex(registerEmail) == false) return alert("Invalid email.");
  
  else if (registerPassword.length < 3) return alert("That password is too short.");
  
  for (i = 0; i <LoginInfo.length; i++){
      if(registerUser==LoginInfo[i].username){
          alert("That username is already in use, choose another")
          return
      }
  }
  
  for (i = 0; i <LoginInfo.length; i++){
      if(registerEmail==LoginInfo[i].email){
          alert("That email is already in use, choose another")
          return
      }
  }
  
  if (registerPassword == registerConfirmPassword)
  {
      var newUser = {
          username: registerUser,
          password: registerPassword,
          email: registerEmail
      
      }
      LoginInfo.push(newUser)
      alert("Your Account has been created!")
      
      window.location.href = "https://mean-green-deal.github.io/content/userloggedin.html";
      return
  }
  else{
      alert("Passwords do not match. Try again")
      return
  }
  
  }

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContext = message;
    messageElement.classList.remove("form__message--success", "form_message-error");
    messageElement.classList.add('form__message--${type}');
}

//setFormMessage(loginFoirm, "success", "You're logged in!");

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input-error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}

var LoginInfo = [
    {
        email: "robertrstephens7@gmail.com",
        username: "reagan",
        password: "test"
    }
]

//regex to check if email contains @
function emailRegex(input) {
    let regex = /@/i;
    return regex.test(input);
}

///////////////////////////////Valid Credentials///////////////////////////////////////////


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    //Tutorial's login method.
/*
    loginForm.addEventListener("submit", e=> {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id == "newUser" && e.target.value.length > 0 && e.target.value.length < 4) {
                setInputError(inputElement, "Username must be at least 4 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })
    });
    */
   
});
