

let map, infoWinow
let infoWindows = []
let binDirections  = []
//FB Initializer


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.20750461273979, lng: -97.15295817275108 },
      zoom: 14.7,
      mapid: '576037077fe48406',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      styles: [
        { 
          "featureType": "poi", 
          "stylers": [ 
            { "visibility": "off" } 
          ] 
        }
      ]
    });
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center); 
    });
   const bins = [
    ["Recycling Bin DP Out 1", 33.2555149, -97.1529043, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP OUT 2", 33.2548833, -97.1533700, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 3", 33.2543800, -97.1536788, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 4", 33.2546405, -97.1535286, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 5", 33.2541964, -97.1537884, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP OUT 6", 33.2540419, -97.1528614, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 7", 33.2530084, -97.1520399, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 8", 33.2532607, -97.1524144, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 9", 33.2531654, -97.1528657, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 10", 33.2532955, -97.1527598, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 11", 33.2543783, -97.1526464, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 12", 33.2540410, -97.1524346, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP OUT 13", 33.2533861, -97.1506733, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB-1 IN 1", 33.2090314, -97.1477843, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB-1 IN 2", 33.2089731, -97.1480699, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB1 IN 3", 33.2088620, -97.1480615, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 4", 33.2085500, -97.1476441, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 5", 33.2082095, -97.1482242, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 6", 33.2088137, -97.1483073, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 7", 33.2090435, -97.1482168, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 8", 33.2091924, -97.1463922, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 9", 333.2089456, -97.1470882, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP Out 1", 33.2555149, -97.1529043, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP OUT 2", 33.2548833, -97.1533700, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 3", 33.2543800, -97.1536788, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 4", 33.2546405, -97.1535286, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 5", 33.2541964, -97.1537884, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP OUT 6", 33.2540419, -97.1528614, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 7", 33.2530084, -97.1520399, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 8", 33.2532607, -97.1524144, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 9", 33.2531654, -97.1528657, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 10", 33.2532955, -97.1527598, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 11", 33.2543783, -97.1526464, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP IN 12", 33.2540410, -97.1524346, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin DP OUT 13", 33.2533861, -97.1506733, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB-1 IN 1", 33.2090314, -97.1477843, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB-1 IN 2", 33.2089731, -97.1480699, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB1 IN 3", 33.2088620, -97.1480615, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 4", 33.2085500, -97.1476441, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 5", 33.2082095, -97.1482242, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 6", 33.2088137, -97.1483073, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 7", 33.2090435, -97.1482168, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 8", 33.2091924, -97.1463922, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Recycling Bin BB Out 9", 33.2089456, -97.1470882, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["UN Out 1", 33.2097871, -97.1476220, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["UN Out 2", 33.2097882, -97.1474946, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 1", 33.2100766, -97.1473856, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 2", 33.2101372, -97.1473789, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 3", 33.2102825, -97.1473910, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 4", 33.2109417, -97.1473789, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 5", 33.2106071, -97.1483824, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["MC Out 1", 33.2127530, -97.1485339, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Bahsen out 1", 33.2101027, -97.1529643, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Tennis courts 1", 33.2095843, -97.1542075, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Wooten Out 1", 33.2103782, -97.1452449, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Union out 1", 33.2103397, -97.1463228, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 2", 33.2104486, -97.1486342, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 3", 33.2113588, -97.1476153, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 4", 33.2114250, -97.1477756, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["IDK 5", 33.2119322, -97.1484585, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["MC Out 1", 33.2117142, -97.1474624, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Bahsen out 1", 33.2112194, -97.1464754, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Tennis courts 1", 33.2116943, -97.1499391, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Wooten Out 1", 33.2114640, -97.1509385, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ["Union out 1", 33.2114870, -97.1528060, "https://mean-green-deal.github.io/pictures/recycling bin.png"],
    ];
    for (let i = 0; i < bins.length; i++) {
      const bin = bins[i];
      const marker = new google.maps.Marker({
        position: { lat: bin[1], lng: bin[2] },
        map,
        icon: {
          url: bin[3],
          scaledSize: new google.maps.Size(28.5, 23.25)
        },
        title: bin[0],
      });
      const infoWindow = new google.maps.InfoWindow({
        content: bin[0],
      });
      infoWindows.push(infoWindow);
      marker.addListener("click", () => {
        infoWindows.forEach((iw) => {
          iw.close();
        });
        infoWindow.open(map, marker);
      });
    }
    
      firebase.auth().onAuthStateChanged(function(user) {
        // Create the DIV to hold the control.
        if (user){
          const centerControlDiv = document.createElement("div");
          const centerControl = RequestBin(map);
          centerControlDiv.index = 1;
          map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);
          const customControlDiv1 = document.createElement("div");
          //const customControl1  = Recycle(map);
          var customControl1 = new Recycle(map);
          customControl1.index = 2;
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(customControlDiv1);
          // Create the control.
          // Append the control to the DIV.
          centerControlDiv.appendChild(centerControl);
          customControlDiv1.appendChild(customControl1);
      }
  });
}


function getLocation() {
  /*
  infoWindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    */
    const marker = new google.maps.Marker({
    map: map,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  // Create a new circle to represent the user's location accuracy
  const circle = new google.maps.Circle({
    map: map,
    fillColor: "#0088ff",
    fillOpacity: 0.1,
    strokeColor: "#0088ff",
    strokeOpacity: 0.5,
    strokeWeight: 1
  });

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // Update the marker and circle positions
        marker.setPosition(location);
        circle.setCenter(location);
        circle.setRadius(position.coords.accuracy);

        map.setCenter(location);
      },
      () => {
        //handleLocationError(true, map.getCenter());
      },
        {
        enableHighAccuracy: true, // setting high accuracy
        maximumAge: 5, // forcing the service to get fresh location
        timeout: 5000 // timeout after 5 seconds
      }
    );
  } else {
    // Browser doesn't support Geolocation
    alert("Geolocation failed.")
  }
}

//Request bin button
function RequestBin(map) {
  const controlButton = document.createElement("button");

  // Set CSS for the control.
  controlButton.style.backgroundColor = "#00853E";
  controlButton.style.border = "2px solid #00853E";
  controlButton.style.borderRadius = "3px";
  controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlButton.style.color = "rgb(255,255,255)";
  controlButton.style.cursor = "pointer";
  controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
  controlButton.style.fontSize = "16px";
  controlButton.style.lineHeight = "38px";
  controlButton.style.margin = "8px 0 22px";
  controlButton.style.padding = "0 5px";
  controlButton.style.textAlign = "center";
  controlButton.textContent = "Request Bin Location";
  controlButton.title = "Request Bin Location";
  controlButton.type = "button";
  controlButton.style.width = "100%";

  controlButton.addEventListener("click", () => {
    controlButton.innerHTML = '<div class="loading-circle"></div>';
    map.setCenter();
    navigator.geolocation.getCurrentPosition((position) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            id: user.uid
         };
         var database_ref = database.ref()
         database_ref.child('RequestedBin/').push(pos)
         controlButton.innerHTML = "Request Bin Location";
        }
        else{
          alert("User not logged in.")
          window.location.href = "https://mean-green-deal.github.io/content/login.html";
          controlButton.innerHTML = "Request Bin Location";
        }
      });
    },
    );
    alert("Bin request has been sent.")
  });
  return controlButton;
}
//copying sams header
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
//end of copying sams header

window.onload = getLocation;
window.initMap = initMap;

function signOut(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    alert('User Signed Out')
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}
//Start of Timer//
let canClick = true; // This flag will control whether the button can be clicked

function Recycle(map) {
  const controlButton = document.createElement("button");
  // Check if the timer is active and set the button state accordingly
  const lastClickTimestamp = localStorage.getItem("lastClickTimestamp");
  if (lastClickTimestamp && Date.now() - lastClickTimestamp < 15 * 60 * 1000) {
      disableButton();
      const remainingTime = 15 * 60 * 1000 - (Date.now() - lastClickTimestamp);
      setTimeout(enableButton, remainingTime);
  }
  function disableButton() {
    controlButton.disabled = true;
    controlButton.style.backgroundColor = "#cccccc"; // Change color to grey
    controlButton.style.border = "2px solid #cccccc";
    controlButton.style.cursor = "not-allowed";
  }
  
  function enableButton() {
    controlButton.disabled = false;
    controlButton.style.backgroundColor = "#00853E"; // Reset color
    controlButton.style.border = "2px solid #00853E";
    controlButton.style.cursor = "pointer";
  }
  const bins = [
    [33.2555149, -97.1529043],
    [33.2548833, -97.1533700],
    [33.2543800, -97.1536788],
    [33.2546405, -97.1535286],
    [33.2541964, -97.1537884],
    [33.2540419, -97.1528614],
    [33.2530084, -97.1520399],
    [33.2532607, -97.1524144],
    [33.2531654, -97.1528657],
    [33.2532955, -97.1527598],
    [33.2543783, -97.1526464],
    [33.2540410, -97.1524346],
    [33.2533861, -97.1506733],
    [33.2090314, -97.1477843],
    [33.2089731, -97.1480699],
    [33.2088620, -97.1480615],
    [33.2085500, -97.1476441],
    [33.2082095, -97.1482242],
    [33.2088137, -97.1483073],
    [33.2090435, -97.1482168],
    [33.2091924, -97.1463922],
    [33.2089456, -97.1470882],
    [33.2555149, -97.1529043],
    [33.2548833, -97.1533700],
    [33.2543800, -97.1536788],
    [33.2546405, -97.1535286],
    [33.2541964, -97.1537884],
    [33.2540419, -97.1528614],
    [33.2530084, -97.1520399],
    [33.2532607, -97.1524144],
    [33.2531654, -97.1528657],
    [33.2532955, -97.1527598],
    [33.2543783, -97.1526464],
    [33.2540410, -97.1524346],
    [33.2533861, -97.1506733],
    [33.2090314, -97.1477843],
    [33.2089731, -97.1480699],
    [33.2088620, -97.1480615],
    [33.2085500, -97.1476441],
    [33.2082095, -97.1482242],
    [33.2088137, -97.1483073],
    [33.2090435, -97.1482168],
    [33.2091924, -97.1463922],
    [33.2089456, -97.1470882],
    [33.2097871, -97.1476220],
    [33.2097882, -97.1474946],
    [33.2100766, -97.1473856],
    [33.2101372, -97.1473789],
    [33.2102825, -97.1473910],
    [33.2109417, -97.1473789],
    [33.2106071, -97.1483824],
    [33.2127530, -97.1485339],
    [33.2101027, -97.1529643],
    [33.2095843, -97.1542075],
    [33.2103782, -97.1452449],
    [33.2103397, -97.1463228],
    [33.2104486, -97.1486342],
    [33.2113588, -97.1476153],
    [33.2114250, -97.1477756],
    [33.2119322, -97.1484585],
    [33.2117142, -97.1474624],
    [33.2112194, -97.1464754],
    [33.2116943, -97.1499391],
    [33.2114640, -97.1509385],
    [33.2114870, -97.1528060],
    ];
  // Set CSS for the control.
  controlButton.style.backgroundColor = "#00853E";
  controlButton.style.border = "2px solid #00853E";
  controlButton.style.borderRadius = "3px";
  controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlButton.style.color = "rgb(255,255,255)";
  controlButton.style.cursor = "pointer";
  controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
  controlButton.style.fontSize = "16px";
  controlButton.style.lineHeight = "38px";
  controlButton.style.margin = "8px 0 22px";
  controlButton.style.padding = "0 5px";
  controlButton.style.textAlign = "center";
  controlButton.textContent = "I Recycled";
  controlButton.title = "I Recycled";
  controlButton.type = "button";
  /*
  if (screen.width < 600) {
    // execute some code if the screen size is less than 600 pixels
    controlButton.style.width = "100%";
    controlButton.style.fontSize = "5px";
  }
  */

  controlButton.addEventListener("click", () => {
    if (!canClick) {
      alert("Please wait for the timer to reset before clicking again.");
      return;
    }
    map.setCenter();
    //Change from 'I Recycled' to loading
    controlButton.innerHTML = '<div class="loading-circle"></div>';
    navigator.geolocation.getCurrentPosition((position) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const latRange = 0.0001; //Within 11.11 meters
          const lngRange = 0.0001; //Within 11.11 meters

          let isNearBin = false;

          for (const bin of bins) {
            const [binLat, binLng] = bin;
            if (
              binLat - latRange < lat &&
              lat < binLat + latRange &&
              binLng - lngRange < lng &&
              lng < binLng + lngRange
            ) {
              firebase.database().ref('users').child(user.uid).child('Points').set(firebase.database.ServerValue.increment(1));
              controlButton.textContent = "I Recycled";
              alert("Congrats! You are awarded 1 point.");
              isNearBin = true;
              disableButton(); // Disable the button when user is awarded a point
              localStorage.setItem("lastClickTimestamp", Date.now());
              const remainingTime = 15 * 60 * 1000;
              setTimeout(enableButton, remainingTime); // Enable the button after the timeout
              break;
            }
          }

          if (!isNearBin) {
            controlButton.textContent = "I Recycled";
            alert("You are not near a bin.");
          }
        }
      });
    });
  });

  return controlButton;
}
/////////////////////////////////////////Start of Pop Up/////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");
   
  // Get a reference to the database
  var database = firebase.database();

  // Check if a user is logged in
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in, retrieve the UID
      var uid = user.uid;

      // Get a reference to the "isNewUser" field for the specific user
      var isNewUserRef = database.ref("users/" + uid + "/isNewUser");

      // Fetch the "isNewUser" value for the specific user
      isNewUserRef.once("value")
        .then(function(snapshot) {
          // The data is available in the snapshot object
          var isNewUserValue = snapshot.val();
          console.log("isNewUser:", isNewUserValue);

          // Update the "isNewUser" field to false
          if (isNewUserValue === true) {
            isNewUserRef.set(false)
              .then(function() {
                console.log("isNewUser updated to false.");
                overlay.style.display = "block";
                popup.style.display = "block";
              })
              .catch(function(error) {
                console.error("Error updating isNewUser:", error);
              });
          }
        })
        .catch(function(error) {
          console.error("Error fetching isNewUser value:", error);
        });
    } else {
      // User is not signed in, handle this case accordingly
      console.log("User is not logged in.");
    }
  });
  // Close the popup when the close button is clicked and update the isNewUser value in the database
  closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
    popup.style.display = "none";
  });
});