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

    //PROFANITY FILTER//
    const bad_words = [
      "4r5e",
      "5h1t",
      "5hit",
      "a55",
      "anal",
      "anus",
      "ar5e",
      "arrse",
      "arse",
      "arses",
      "ass",
      "ass-fucker",
      "asses",
      "assfucker",
      "assfukka",
      "asshole",
      "assholes",
      "asswhole",
      "a_s_s",
      "a$$",
      "as$",
      "a$s",
      "b!tch",
      "b00bs",
      "b17ch",
      "b1tch",
      "ballbag",
      "balls",
      "ballsack",
      "bastard",
      "beastial",
      "beastiality",
      "bellend",
      "bestial",
      "bestiality",
      "bi+ch",
      "biatch",
      "bitch",
      "bitchboy",
      "bitcher",
      "bitchers",
      "bitches",
      "bitchin",
      "bitching",
      "bloody",
      "blow job",
      "blowjob",
      "blowjobs",
      "boiolas",
      "bollock",
      "bollok",
      "boner",
      "boob",
      "boobs",
      "booobs",
      "boooobs",
      "booooobs",
      "booooooobs",
      "breasts",
      "buceta",
      "bugger",
      "bullshit",
      "bum",
      "butt",
      "butts",
      "butthole",
      "buttmuch",
      "buttplug",
      "c0ck",
      "c0cksucker",
      "carpet muncher",
      "cawk",
      "chink",
      "cipa",
      "cl1t",
      "clit",
      "clitoris",
      "clits",
      "cnut",
      "cock",
      "cock-sucker",
      "cockface",
      "cockhead",
      "cockmunch",
      "cockmuncher",
      "cocks",
      "cocksuck",
      "cocksucked",
      "cocksucker",
      "cocksucking",
      "cocksucks",
      "cocksuka",
      "cocksukka",
      "cok",
      "cokmuncher",
      "coksucka",
      "coon",
      "cox",
      "crap",
      "cum",
      "cummer",
      "cumming",
      "cums",
      "cumshot",
      "cunilingus",
      "cunillingus",
      "cunnilingus",
      "cunt",
      "cuntlick",
      "cuntlicker",
      "cuntlicking",
      "cunts",
      "cyalis",
      "cyberfuc",
      "cyberfuck",
      "cyberfucked",
      "cyberfucker",
      "cyberfuckers",
      "cyberfucking",
      "d1ck",
      "damn",
      "dick",
      "dickhead",
      "dildo",
      "dildos",
      "dink",
      "dinks",
      "dirsa",
      "dlck",
      "dog-fucker",
      "doggin",
      "dogging",
      "donkeyribber",
      "doosh",
      "duche",
      "dyke",
      "ejaculate",
      "ejaculated",
      "ejaculates",
      "ejaculating",
      "ejaculatings",
      "ejaculation",
      "ejakulate",
      "f u c k",
      "f u c k e r",
      "f4nny",
      "fag",
      "fagging",
      "faggitt",
      "faggot",
      "faggs",
      "fagot",
      "fagots",
      "fags",
      "fanny",
      "fannyflaps",
      "fannyfucker",
      "fanyy",
      "fatass",
      "fcuk",
      "fcuker",
      "fcuking",
      "feck",
      "fecker",
      "felching",
      "fellate",
      "fellatio",
      "fingerfuck",
      "fingerfucked",
      "fingerfucker",
      "fingerfuckers",
      "fingerfucking",
      "fingerfucks",
      "fistfuck",
      "fistfucked",
      "fistfucker",
      "fistfuckers",
      "fistfucking",
      "fistfuckings",
      "fistfucks",
      "flange",
      "fook",
      "fooker",
      "fuck",
      "fucka",
      "fucked",
      "fucker",
      "fuckers",
      "fuckhead",
      "fuckheads",
      "fuckin",
      "fucking",
      "fuckings",
      "fuckingshitmotherfucker",
      "fuckme",
      "fucks",
      "fuckwhit",
      "fuckwit",
      "fudge packer",
      "fudgepacker",
      "fuk",
      "fuker",
      "fukker",
      "fukkin",
      "fuks",
      "fukwhit",
      "fukwit",
      "fux",
      "fux0r",
      "f_u_c_k",
      "gangbang",
      "gangbanged",
      "gangbangs",
      "gaylord",
      "gaysex",
      "goatse",
      "god-dam",
      "god-damned",
      "goddamn",
      "goddamned",
      "hardcoresex",
      "headass",
      "hoar",
      "hoare",
      "hoer",
      "hoes",
      "homo",
      "hore",
      "horniest",
      "horny",
      "hotsex",
      "jack-off",
      "jackoff",
      "jap",
      "jerk-off",
      "jism",
      "jiz",
      "jizm",
      "jizz",
      "kawk",
      "knobead",
      "knobed",
      "knobend",
      "knobhead",
      "knobjocky",
      "knobjokey",
      "kock",
      "kondum",
      "kondums",
      "kum",
      "kummer",
      "kumming",
      "kums",
      "kunilingus",
      "l3i+ch",
      "l3itch",
      "labia",
      "lust",
      "lusting",
      "m0f0",
      "m0fo",
      "m45terbate",
      "ma5terb8",
      "ma5terbate",
      "masochist",
      "master-bate",
      "masterb8",
      "masterbat*",
      "masterbat3",
      "masterbate",
      "masterbation",
      "masterbations",
      "masturbate",
      "mo-fo",
      "mof0",
      "mofo",
      "mothafuck",
      "mothafucka",
      "mothafuckas",
      "mothafuckaz",
      "mothafucked",
      "mothafucker",
      "mothafuckers",
      "mothafuckin",
      "mothafucking",
      "mothafuckings",
      "mothafucks",
      "motherfuck",
      "motherfucked",
      "motherfucker",
      "motherfuckers",
      "motherfuckin",
      "motherfucking",
      "motherfuckings",
      "motherfuckka",
      "motherfucks",
      "muff",
      "muthafecker",
      "muthafuckker",
      "mutherfucker",
      "n1gga",
      "n1gger",
      "nazi",
      "nigg3r",
      "nigg4h",
      "nigga",
      "niggah",
      "niggas",
      "niggaz",
      "nigger",
      "niggers",
      "nob",
      "nob jokey",
      "nobhead",
      "nobjocky",
      "nobjokey",
      "numbnuts",
      "nutsack",
      "orgasim",
      "orgasims",
      "orgasm",
      "orgasms",
      "p0rn",
      "pawn",
      "pecker",
      "penis",
      "penisfucker",
      "phonesex",
      "phuck",
      "phuk",
      "phuked",
      "phuking",
      "phukked",
      "phukking",
      "phuks",
      "phuq",
      "pigfucker",
      "pimpis",
      "piss",
      "pissed",
      "pisser",
      "pissers",
      "pisses",
      "pissflaps",
      "pissin",
      "pissing",
      "pissoff",
      "poop",
      "porn",
      "porno",
      "pornography",
      "pornos",
      "prick",
      "pricks",
      "pron",
      "pube",
      "pusse",
      "pussi",
      "pussies",
      "pussy",
      "pussys",
      "rectum",
      "retard",
      "rimjaw",
      "rimming",
      "s hit",
      "s.o.b.",
      "sadist",
      "schlong",
      "screwing",
      "scroat",
      "scrote",
      "scrotum",
      "semen",
      "sex",
      "sh!+",
      "sh!t",
      "sh1t",
      "shag",
      "shagger",
      "shaggin",
      "shagging",
      "shemale",
      "shi+",
      "shit",
      "shitdick",
      "shite",
      "shited",
      "shitey",
      "shitfuck",
      "shitfull",
      "shithead",
      "shiting",
      "shitings",
      "shits",
      "shitted",
      "shitter",
      "shitters",
      "shitting",
      "shittings",
      "shitty",
      "skank",
      "slut",
      "sluts",
      "smegma",
      "smut",
      "snatch",
      "son-of-a-bitch",
      "spac",
      "spunk",
      "s_h_i_t",
      "t1tt1e5",
      "t1tties",
      "teets",
      "teez",
      "testical",
      "testicle",
      "tit",
      "titfuck",
      "tits",
      "titt",
      "tittie5",
      "tittiefucker",
      "titties",
      "tittyfuck",
      "tittywank",
      "titwank",
      "tosser",
      "turd",
      "tw4t",
      "twat",
      "twathead",
      "twatty",
      "twunt",
      "twunter",
      "v14gra",
      "v1gra",
      "vagina",
      "viagra",
      "vulva",
      "w00se",
      "wang",
      "wank",
      "wanker",
      "wanky",
      "whoar",
      "whore",
      "willies",
      "willy",
    ]
    for (const bad_word of bad_words) {
      if(registerUser.includes(bad_word)){
        alert("Please avoid any profanity in display name.");
        return
      }
    }
      //Tests email and password
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(registerEmail) == false || registerPassword.length < 6) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
      }
      if (registerUser.length > 8) {
        alert('Display name must be no longer than 8 characters!!')
        return
        // Don't continue running the code
      }

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
        Points : 0,
        isNewUser : true
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
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})