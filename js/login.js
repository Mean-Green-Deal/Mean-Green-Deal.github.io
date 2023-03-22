import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  



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
//retrieves user info for login
function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    for (i = 0; i <LoginInfo.length; i++) {
        if (username == LoginInfo[i].username && password == LoginInfo[i].password) {
            alert(username + " is logged in")
            return
        }
    }
    console.log("incorrect username or password")
}
function registerUser() {
    var registerUser = document.getElementById("newUser").value
    var registerEmail = document.getElementById("newEmail").value
    var registerPassword = document.getElementById("newPassword").value
    var registerConfirmPassword = document.getElementById("confirmPassword").value
///////////////////////////////Valid Credentials ///////////////////////////////////////////
if (registerUser.length < 3) {
    alert("That username is too short.")
    return
}
else if (registerEmail.length < 3) {
    alert("That email is too short.")
    return
}
else if(emailRegex(registerEmail) == false) {
    alert("Invalid email.")
    return
}
else if (registerPassword.length < 3) {
    alert("That password is too short.")
    return
}
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
    return
}
else{
    alert("Passwords do not match. Try again")
    return
}
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