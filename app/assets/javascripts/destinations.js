$(document).ready(function () {
    function initialize() {
        var myCoords = new google.maps.LatLng(37.877974, -4.778309)

        var mapOptions = {
            center: myCoords,
            // center: {lat: -34.397, lng: 150.644 },
            zoom: 15,
            scrollwheel: false
        };

        var map = new google.maps.Map(
            // document.getElementById('map-canvas'), mapOptions);
            $("#destination-map")[0], mapOptions);

        var marker = new google.maps.Marker({
            position: myCoords,
            map: map,
            title: 'Puente Romano',
            label: 'Puente Romano',
            icon: '<%= asset_path 'bridge.png' %>',
            animation: google.maps.Animation.BOUNCE
            // icon: 'http://cdn.onlinewebfonts.com/svg/download_298941.svg'
        });

        var contentString = "<h2>Puente Romano</h2><p>This is a Roman Bridge</p>"

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        })

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        })
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});