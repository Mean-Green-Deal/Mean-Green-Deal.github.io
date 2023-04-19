let map, infoWindow
let infoWindows = []

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
    
        
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    
    directionsDisplay.setMap(map);  
   
    for (let i = 0; i < bins.length; i++) {
      const bin = bins[i];
  
      const marker = new google.maps.Marker({
        position: { lat: bin[1], lng: bin[2] },
        map,
        icon: {
          url: "pictures/recycling bin.png",
          scaledSize: new google.maps.Size(28.5, 23.25) 
        },
        title: bin[0],
      });
        
        
        const infoWindow = new google.maps.InfoWindow({
        content: bin[0],
        });
    
        infoWindows.push(infoWindow);
        
        marker.addListener("click", () => {
            
             directionsService.route({
                // origin: document.getElementById('start').value,
                origin: myLatLng,
                destination: {
                    lat: bin[1],
                    lng: bin[2]
                }    
                travelMode: 'WALKING',
              },
              function (response, status) {
                if (status === "OK") {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert("Directions request failed due to " + status);
                }
              });
        
            infoWindows.forEach((iw) => {
                iw.close();
            });
            
            infoWindow.open(map, marker);
        });    
      }
    
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
    
      directionsDisplay.setMap(map);      
    
    // Create the DIV to hold the control.
    const centerControlDiv = document.createElement("div");
    // Create the control.
    const centerControl = createCenterControl(map);

    // Append the control to the DIV.
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);
    
  }

function getLocation() {
    //infoWindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const  location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(location);
        },
        () => {
          //handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      //handleLocationError(false, infoWindow, map.getCenter());
    }
}

  function handleLocationError(browserHasGeolocation, infoWindow, location) {
  infoWindow.setPosition(location);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
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
  
