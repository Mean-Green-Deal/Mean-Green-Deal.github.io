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
        position: { lat: 33.2555149, lng: -97.1529043 },
        map,
        title: "Recycling Bin DP Out 1",
        icon: {
            url: "bin.svg",
            scaledSize: new google.maps.Size(28.5, 23.25)
            
        }
    });
    new google.maps.Marker({
      position: { lat: 33.2548833, lng: -97.1533700 },
      map,
      title: "Recycling Bin DP OUT 2",
      icon: {
          url: "bin.svg",
          scaledSize: new google.maps.Size(28.5, 23.25)
          
      }
  });
  }
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
  //svg image url: https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-solid-dark-blue.png
  //33.20750461273979, -97.15295817275108