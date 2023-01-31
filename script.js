function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.20750461273979, lng: -97.15295817275108 },
      zoom: 14.7,
      mapid: '576037077fe48406'
    });
    new google.maps.Marker({
        position: { lat: 33.20750461273979, lng: -97.15295817275108 },
        map,
        title: "Recycling Bin 1",
    });
  }

  //33.20750461273979, -97.15295817275108