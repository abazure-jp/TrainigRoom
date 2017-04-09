var map;

var styleArray = [
    {
        featureType: "all",
        stylers: [
            {saturation: -80}
        ]
    }, {
        featureType: "all",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    }, {
        featureType: "landscape",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {visibility: "off"}
        ]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.523454, lng: 139.938181},
        zoom: 15
    });
    map.setOptions({styles: styleArray});

    $.ajax({
        type: "GET",
        url: "./gpx/04.gpx",
        dataType: "xml",
        success: function (xml) {
            var points = [];
            var bounds = new google.maps.LatLngBounds();
            $(xml).find("trkpt").each(function () {
                var lat = $(this).attr("lat");
                var lon = $(this).attr("lon");
                var p = new google.maps.LatLng(lat, lon);
                points.push(p);
                bounds.extend(p);
            });
            var poly = new google.maps.Polyline({
                // use your own style here
                path: points,
                strokeColor: "#FF00AA",
                strokeOpacity: .9,
                strokeWeight: 4
            });
            poly.setMap(map);
            // fit bounds to track
            map.fitBounds(bounds);
        }
    });
}
