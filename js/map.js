let map, infoWinow;

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
    ];
    for (let i = 0; i < bins.length; i++) {
      const bin = bins[i];
  
      new google.maps.Marker({
        position: { lat: bin[1], lng: bin[2] },
        map,
        icon: {
          url: "pictures/bin.svg",
          scaledSize: new google.maps.Size(28.5, 23.25) 
        },
        title: bin[0],
      });
    }
  }

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
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

window.initMap = initMap;


    /*
    new google.maps.Marker({
        position: { lat: 33.2555149, lng: -97.1529043 },
        map,
        title: "Recycling Bin DP Out 1",
        icon: {
            url: "pictures/bin.svg",
            scaledSize: new google.maps.Size(28.5, 23.25)
            
        }
    });
    new google.maps.Marker({
      position: { lat: 33.2548833, lng: -97.1533700 },
      map,
      title: "Recycling Bin DP OUT 2",
      icon: {
          url: "pictures/bin.svg",
          scaledSize: new google.maps.Size(28.5, 23.25)
          
      }
  });
  new google.maps.Marker({
    position: { lat: 33.2543800, lng: -97.1536788 },
    map,
    title: "Recycling Bin DP IN 3",
    icon: {
        url: "pictures/bin.svg",
        scaledSize: new google.maps.Size(28.5, 23.25)
        
    }
});
new google.maps.Marker({
  position: { lat: 33.2546405, lng: -97.1535286 },
  map,
  title: "Recycling Bin DP IN 4",
  icon: {
      url: "pictures/bin.svg",
      scaledSize: new google.maps.Size(28.5, 23.25)
      
  }
});
new google.maps.Marker({
  position: { lat: 33.2541964, lng: -97.1537884 },
  map,
  title: "Recycling Bin DP IN 5",
  icon: {
      url: "pictures/bin.svg",
      scaledSize: new google.maps.Size(28.5, 23.25)
      
  }
});
new google.maps.Marker({
  position: { lat: 33.2540419, lng: -97.1528614 },
  map,
  title: "Recycling Bin DP OUT 6",
  icon: {
      url: "pictures/bin.svg",
      scaledSize: new google.maps.Size(28.5, 23.25)
  }
});
new google.maps.Marker({
  position: { lat: 33.2530084, lng: -97.1520399 },
  map,
  title: "Recycling Bin DP IN 7",
  icon: {
      url: "pictures/bin.svg",
      scaledSize: new google.maps.Size(28.5, 23.25)
  }
});
new google.maps.Marker({
  position: { lat: 33.2530084, lng: -97.1520399 },
  map,
  title: "Recycling Bin DP IN 7",
  icon: {
      url: "pictures/bin.svg",
      scaledSize: new google.maps.Size(28.5, 23.25)
  }
});
*/

  //svg image url: https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-solid-dark-blue.png
  //33.20750461273979, -97.15295817275108

  //const domContainer = document.querySelector('#like_button_container');
//const root = ReactDOM.createRoot(domContainer);
//root.render(e(LikeButton));
  //svg image url: https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-solid-dark-blue.png
  //33.20750461273979, -97.15295817275108
  
