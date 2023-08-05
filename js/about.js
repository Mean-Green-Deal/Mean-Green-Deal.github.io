const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
function signOut(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert('User Signed Out')
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
 