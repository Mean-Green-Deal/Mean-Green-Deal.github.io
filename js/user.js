const firebaseConfig = {
  apiKey: "AIzaSyAFvVTARYzQrWvE9OXCTY3JV3o9SxHbJ7U",
  authDomain: "mean-green-deal-726f9.firebaseapp.com",
  projectId: "mean-green-deal-726f9",
  storageBucket: "mean-green-deal-726f9.appspot.com",
  messagingSenderId: "747867835951",
  appId: "1:747867835951:web:084db4a1feb703eafe00da",
  measurementId: "G-2QKNB5QXF4"
  };

let map, infoWinow;

//FB Initializer
firebase.initializeApp(firebaseConfig);
const database = firebase.database()

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
    ];
    for (let i = 0; i < bins.length; i++) {
      const bin = bins[i];
  
      const marker = new google.maps.Marker({
        position: { lat: bin[1], lng: bin[2] },
        map,
        icon: {
          url: "https://mean-green-deal.github.io/pictures/recycling bin.png",
          scaledSize: new google.maps.Size(28.5, 23.25) 
        },
        title: bin[0],
      });
      
      /*  
      const infoWindow = new.google.maps.InfoWindow({
          arialLabel: bin[0],
      });    
    }
    
    marker.addListener("click", () => {
        infoWindow.open ({
            anchor: marker,
            map,
        });
       */    
      }
    
    // Create the DIV to hold the control.
    const centerControlDiv = document.createElement("div");
    const centerControl = RequestBin(map);
    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);

    const RecycleDiv = document.createElement("div");
    const Recycle = Recycle(map);
    RecycleDiv.index = 2;
    map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(RecycleDiv);
    // Create the control.
    
    

    // Append the control to the DIV.
    centerControlDiv.appendChild(centerControl);
    
    RecycleDiv.appendChild(Recycle);
    

    
  }

function getLocation() {
  infoWindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            user: user.uid
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
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
  controlButton.style.backgroundColor = "#fff";
  controlButton.style.border = "2px solid #fff";
  controlButton.style.borderRadius = "3px";
  controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlButton.style.color = "rgb(25,25,25)";
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

  controlButton.addEventListener("click", () => {
    map.setCenter();
    navigator.geolocation.getCurrentPosition((position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    var database_ref = database.ref()
    database_ref.child('RequestedBin/').set(pos)
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
  //svg image url: https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-solid-dark-blue.png
  //33.20750461273979, -97.15295817275108

  //const domContainer = document.querySelector('#like_button_container');
//const root = ReactDOM.createRoot(domContainer);
//root.render(e(LikeButton));
  //svg image url: https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-solid-dark-blue.png
  //33.20750461273979, -97.15295817275108
  function signOut(){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      alert("signed out")
    }).catch((error) => {
      // An error happened.
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
  ];
  // Set CSS for the control.
  controlButton.style.backgroundColor = "#fff";
  controlButton.style.border = "2px solid #fff";
  controlButton.style.borderRadius = "3px";
  controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlButton.style.color = "rgb(25,25,25)";
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

  controlButton.addEventListener("click", () => {
    map.setCenter();
    navigator.geolocation.getCurrentPosition((position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    for (let i = 0; i < bins.length; i++){
      const bin = bins[i];
      if(lat == bins[1] && lng == bins[2]){
        var user_data = {
          Points : Points+1
        }
        var database_ref = database.ref()
        //database_ref.child('users/' + user.uid).update(user_data)
      }
    }
    },
    );
    alert("Bin request has been sent.")
  });
  return controlButton;
}