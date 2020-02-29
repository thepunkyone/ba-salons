// Initialize and add the map
function createMap() {
  // Map JSON

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90"
        }
      ]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d"
        }
      ]
    }
  ];

  // The location of BA Salons
  var pilsonu3 = { lat: 56.9348489, lng: 24.0690386 };
  var pasta25 = { lat: 56.9667164, lng: 23.1621803 };
  // The map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 56.956, lng: 23.7 },
    styles: mapStyle,
    scrollwheel: false
  });

  // Info popups

  var contentStringPilsonu =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h4 id="firstHeading" class="firstHeading">"BA Salons" Rīga</h4>' +
    '<div id="bodyContent">' +
    "<p>Pilsoņu iela 3, Āgenskalns, Rīga, LV 1002</p>" +
    '<p>Tālr. <a href="tel:+371 29161903">+371 29161903</a></p>' +
    '<p><a href="https://g.page/BASalons-Riga" target="_blank">' +
    "Atvērt Google Maps</a> " +
    "</div>" +
    "</div>";

  var infoWindowPilsonu = new google.maps.InfoWindow({
    content: contentStringPilsonu
  });

  var contentStringPasta =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h4 id="firstHeading" class="firstHeading">"BA Salons" Tukums</h4>' +
    '<div id="bodyContent">' +
    "<p>Pasta iela 25, Tukums, LV 3101</p>" +
    '<p>Tālr. <a href="tel:+371 29161903">+371 29161903</a></p>' +
    '<p><a href="https://g.page/BASalons-Riga" target="_blank">' +
    "Atvērt Google Maps</a> " +
    "</div>" +
    "</div>";

  var infoWindowPasta = new google.maps.InfoWindow({
    content: contentStringPasta
  });

  // The markers
  var marker1 = new google.maps.Marker({
    position: pilsonu3,
    label: "B",
    map: map,
    title: "BA Salons, Pilsoņu 3, Rīga"
  });
  marker1.addListener("click", function() {
    infoWindowPilsonu.open(map, marker1);
  });

  var marker2 = new google.maps.Marker({
    position: pasta25,
    label: "A",
    map: map,
    title: "BA Salons, Pasta 25, Tukums"
  });
  marker2.addListener("click", function() {
    infoWindowPasta.open(map, marker2);
  });

  // Fit map to marker bounds
  const markers = [marker1, marker2];
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markers.length; i++) {
    bounds.extend(markers[i].getPosition());
  }
  map.fitBounds(bounds);
  map.setCenter(bounds.getCenter());
}

export default createMap;
