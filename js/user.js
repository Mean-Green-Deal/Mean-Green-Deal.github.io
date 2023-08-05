

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
    ["OG Bin", 33.2143251, -97.165704, "https://mean-green-deal.github.io/pictures/Original recycling bin.png"]
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
        let directionsService = new google.maps.DirectionsService();
            let directionsRenderer = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                preserveViewport: true
            });
            var endLocation =  new google.maps.LatLng(bin[1], bin[2]);
            var startLocation;
            binDirections.push(directionsRenderer);
            binDirections.forEach((dr) => {
                dr.setMap(null);
            });
            navigator.geolocation.getCurrentPosition(
                (position) => {
                       startLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    
                const request = {
                        origin: startLocation,
                        destination: endLocation,
                        travelMode: google.maps.TravelMode.WALKING,
                };

                directionsService.route(request, (result, status) => {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(result);
                        directionsRenderer.setMap(map);
                    }
                });
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
              }
            );
            
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
        handleLocationError(true, infoWindow, map.getCenter());
      },
        {
        enableHighAccuracy: true, // setting high accuracy
        maximumAge: 0, // forcing the service to get fresh location
        timeout: 5000 // timeout after 5 seconds
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
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
        }
        else{
          alert("User not logged in.")
          window.location.href = "https://mean-green-deal.github.io/content/login.html";
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

function Recycle(map) {
  const controlButton = document.createElement("button");
  const bins = [
    ["Recycling Bin DP Out 1", 33.2555149, -97.1529043],
    ["Recycling Bin DP OUT 2", 33.2548833, -97.1533700],
    ["Recycling Bin DP IN 3", 33.2543800, -97.1536788],
    ["Recycling Bin DP IN 4", 33.2546405, -97.1535286],
    ["Recycling Bin DP IN 5", 33.2541964, -97.1537884],
    ["Recycling Bin DP OUT 6", 33.2540419, -97.1528614],
    ["Recycling Bin DP IN 7", 33.2530084, -97.1520399],
    ["Recycling Bin DP IN 8", 33.2532607, -97.1524144],
    ["Recycling Bin DP IN 9", 33.2531654, -97.1528657],
    ["Recycling Bin DP IN 10", 33.2532955, -97.1527598],
    ["Recycling Bin DP IN 11", 33.2543783, -97.1526464],
    ["Recycling Bin DP IN 12", 33.2540410, -97.1524346],
    ["Recycling Bin DP OUT 13", 33.2533861, -97.1506733],
    ["Recycling Bin BB-1 IN 1", 33.2090314, -97.1477843],
    ["Recycling Bin BB-1 IN 2", 33.2089731, -97.1480699],
    ["Recycling Bin BB1 IN 3", 33.2088620, -97.1480615],
    ["Recycling Bin BB Out 4", 33.2085500, -97.1476441],
    ["Recycling Bin BB Out 5", 33.2082095, -97.1482242],
    ["Recycling Bin BB Out 6", 33.2088137, -97.1483073],
    ["Recycling Bin BB Out 7", 33.2090435, -97.1482168],
    ["Recycling Bin BB Out 8", 33.2091924, -97.1463922],
    ["Recycling Bin BB Out 9", 333.2089456, -97.1470882],
    ["Recycling Bin DP Out 1", 33.2555149, -97.1529043],
    ["Recycling Bin DP OUT 2", 33.2548833, -97.1533700],
    ["Recycling Bin DP IN 3", 33.2543800, -97.1536788],
    ["Recycling Bin DP IN 4", 33.2546405, -97.1535286],
    ["Recycling Bin DP IN 5", 33.2541964, -97.1537884],
    ["Recycling Bin DP OUT 6", 33.2540419, -97.1528614],
    ["Recycling Bin DP IN 7", 33.2530084, -97.1520399],
    ["Recycling Bin DP IN 8", 33.2532607, -97.1524144],
    ["Recycling Bin DP IN 9", 33.2531654, -97.1528657],
    ["Recycling Bin DP IN 10", 33.2532955, -97.1527598],
    ["Recycling Bin DP IN 11", 33.2543783, -97.1526464],
    ["Recycling Bin DP IN 12", 33.2540410, -97.1524346],
    ["Recycling Bin DP OUT 13", 33.2533861, -97.1506733],
    ["Recycling Bin BB-1 IN 1", 33.2090314, -97.1477843],
    ["Recycling Bin BB-1 IN 2", 33.2089731, -97.1480699],
    ["Recycling Bin BB1 IN 3", 33.2088620, -97.1480615],
    ["Recycling Bin BB Out 4", 33.2085500, -97.1476441],
    ["Recycling Bin BB Out 5", 33.2082095, -97.1482242],
    ["Recycling Bin BB Out 6", 33.2088137, -97.1483073],
    ["Recycling Bin BB Out 7", 33.2090435, -97.1482168],
    ["Recycling Bin BB Out 8", 33.2091924, -97.1463922],
    ["Recycling Bin BB Out 9", 33.2089456, -97.1470882],
    ["UN Out 1", 33.2097871, -97.1476220],
    ["UN Out 2", 33.2097882, -97.1474946],
    ["IDK 1", 33.2100766, -97.1473856],
    ["IDK 2", 33.2101372, -97.1473789],
    ["IDK 3", 33.2102825, -97.1473910],
    ["IDK 4", 33.2109417, -97.1473789],
    ["IDK 5", 33.2106071, -97.1483824],
    ["MC Out 1", 33.2127530, -97.1485339],
    ["Bahsen out 1", 33.2101027, -97.1529643],
    ["Tennis courts 1", 33.2095843, -97.1542075],
    ["Wooten Out 1", 33.2103782, -97.1452449],
    ["Union out 1", 33.2103397, -97.1463228],
    ["IDK 2", 33.2104486, -97.1486342],
    ["IDK 3", 33.2113588, -97.1476153],
    ["IDK 4", 33.2114250, -97.1477756],
    ["IDK 5", 33.2119322, -97.1484585],
    ["MC Out 1", 33.2117142, -97.1474624],
    ["Bahsen out 1", 33.2112194, -97.1464754],
    ["Tennis courts 1", 33.2116943, -97.1499391],
    ["Wooten Out 1", 33.2114640, -97.1509385],
    ["Union out 1", 33.2114870, -97.1528060],
    ["OG Bin", 33.2143251, -97.165704]
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
    map.setCenter();
    navigator.geolocation.getCurrentPosition((position) => {
    firebase.auth().onAuthStateChanged((user) => {
      var database_ref = database.ref()
      var break_count = 0;
      if (user) {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
      for (let i = 0; i < bins.length; i++){
          const bin = bins[i];
          if(bin[1]-0.01 < lat && lat < bin[1]+0.01 && bin[2]-0.01 < lng && lng < bin[2]+0.01) { //1 = 111km => 0.001 = 111m => 0.00001 = 1.11m
            firebase.database().ref('users').child(user.uid).child('Points').set(firebase.database.ServerValue.increment(1))
            alert("Congrats you are awarded 1 point.")
            break
          }
          else{
            break_count++
            //alert("You are not near a bin")
            //break
          }
          if(break_count == bins.length){
            alert("You are not near a bin")
            break
          }
        }
      } else {
        // User is signed out
        // ...
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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create a reference to the database
  var database = firebase.database();
  var ref = database.ref('users');

  ref.once('value', function(snapshot) {
    // Get the data as an object
    var data = snapshot.val();

    // Function to check if the user is new based on the isNewUser value in the data object
    function isNewUser() {
      return data && data.isNewUser === true;
    }

    // Show the popup if the user is new, otherwise hide it
    if (isNewUser()) {
      overlay.style.display = "block";
      popup.style.display = "block";
    } else {
      overlay.style.display = "none";
      popup.style.display = "none";
    }

    // Close the popup when the close button is clicked and update the isNewUser value in the database
    closeBtn.addEventListener("click", function() {
      overlay.style.display = "none";
      popup.style.display = "none";

      // Update the isNewUser value in the database to "false" for the current user
      if (data) {
        database.ref('users').update({
          isNewUser: false
        });
      }
    });
  });
});