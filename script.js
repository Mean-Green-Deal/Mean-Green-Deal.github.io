function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.20750461273979, lng: -97.15295817275108 },
      zoom: 14.7,
      mapid: '576037077fe48406',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
    });
    new google.maps.Marker({
        position: { lat: 33.20750461273979, lng: -97.15295817275108 },
        map,
        title: "Recycling Bin 1",
        scale: 2,
        icon: {
            url: "bin.svg",
            //scaleSize: new google.maps.Size(38, 31)
            
        }
    });
  }
  //svg image url: https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-solid-dark-blue.png
  //33.20750461273979, -97.15295817275108