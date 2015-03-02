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
			L.mapbox.map('map', 'faizshukri.lanaoclg');
		</script>
	</body>
</html>
