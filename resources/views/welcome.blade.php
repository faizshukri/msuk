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
		<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.js'></script>
		<script>
			// Provide your access token
			L.mapbox.accessToken = 'pk.eyJ1IjoiZmFpenNodWtyaSIsImEiOiJsN0t0RGhZIn0.x72rDz-3Zc0oNijx_KXcRg';
			// Create a map in the div #map
			L.mapbox.map('map', 'faizshukri.lanaoclg');
		</script>
	</body>
</html>
