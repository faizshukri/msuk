<html>
<head>
    <title>Laravel</title>
    <link rel="stylesheet" href="{{ elixir("css/app.css") }}"/>
    <style>
        #map {
            height: 100%;
            width: 100%;
        }
    </style>
</head>
<body>
<div id="map"></div>
<script type="text/javascript" src="{{ elixir("js/app.js") }}"></script>
<script>
    // Provide your access token
    L.mapbox.accessToken = 'pk.eyJ1IjoiZmFpenNodWtyaSIsImEiOiJsN0t0RGhZIn0.x72rDz-3Zc0oNijx_KXcRg';
    // Create a map in the div #map
    var map = L.mapbox.map('map', 'faizshukri.lanaoclg').setView([53.381911, -1.476800], 14);
    var markers = new L.MarkerClusterGroup();

    $(function(){
        $.getJSON('addresses', function(data){
            $.each(data, function(index, value){
                var marker = L.marker(new L.LatLng(value.x, value.y), {
                    icon: L.mapbox.marker.icon({'marker-symbol': 'village', 'marker-size': 'large', 'marker-color': '1087bf'})
                });
                markers.addLayer(marker);
            });

            map.addLayer(markers);
        });
    });
    //
</script>
</body>
</html>
