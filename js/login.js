//Firebase Config
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
  //////////////////////Function for registering user//////////////////////
  function registerUser() {
    //Getting user credentials
    var registerUser = document.getElementById("newUser").value
    var registerEmail = document.getElementById("newEmail").value
    var registerPassword = document.getElementById("newPassword").value
    var registerConfirmPassword = document.getElementById("confirmPassword").value
    auth.createUserWithEmailAndPassword(registerEmail, registerPassword).then(function() {
      // Declare user variable
      var user = auth.currentUser
      // Add this user to Firebase Database
      var database_ref = database.ref()
      // Create User data
      var user_data = {
        registerEmail : registerEmail,
        registerUser : registerUser,
        last_login : Date.now(),
        Points : 0
      }
      // Push to Firebase Database and Added promise to fix redirect
      var updatePromise = database_ref.child('users/' + user.uid).set(user_data)
      // Return the update promise
      return updatePromise;
      }).then(() => {
        alert('User Logged In!!')
        window.location.href = "https://mean-green-deal.github.io/"
      }).catch(function(error) {
          alert(error.message)
      });
      //Tests email and password
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(registerEmail) == false || registerPassword < 6) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  }
    //////////////////////Login function//////////////////////
     function login() {
      var email = document.getElementById("email").value
      var password = document.getElementById("password").value
      //Tests the email and password
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == false || password < 6) {
        alert('Email or Password is Outta Line!!')
        return
      }
        auth.signInWithEmailAndPassword(email, password).then(function() {
        // Declare user variable
        var user = auth.currentUser
        // Add this user to Firebase Database
        //Make reference to firebase
        var database_ref = database.ref()
        //Update User info with last logged in
        var user_data = {
          last_login : Date.now()
        }
        //Push to Firebase Database and Added promise to fix redirect
        var updatePromise = database_ref.child('users/' + user.uid).update(user_data)
        // Return the update promise
        return updatePromise;
        }).then(() => {
          alert('User Logged In!!')
          window.location.href = "https://mean-green-deal.github.io/"
        }).catch(function(error) {
        // Firebase will use this to alert of its errors
          alert(error.message)
  });
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
            createAccountForm.classList.add("form--hidden");
            loginForm.classList.remove("form--hidden");
        });
    });