var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    // Before login
    mix.sass("home.scss");

    mix.scripts([
        'assets/jquery/dist/jquery.js',
        'assets/bootstrap/dist/js/bootstrap.js'
    ], 'public/js/guest.js','public');

    mix.styles([
        'css/home.css',
        'assets/normalize-css/normalize.css',
        'assets/bootstrap/dist/css/bootstrap.css'
    ], 'public/css/guest.css','public');

    // After login
    mix.scripts([
        'assets/jquery/dist/jquery.js',
        'assets/bootstrap/dist/js/bootstrap.js',
        'assets/mapbox.js/mapbox.js',
        'assets/leaflet.markercluster/dist/leaflet.markercluster.js'
    ], 'public/js/app.js','public');

    mix.styles([
        'assets/normalize-css/normalize.css',
        'assets/bootstrap/dist/css/bootstrap.css',
        'assets/mapbox.js/mapbox.css',
        'assets/leaflet.markercluster/dist/MarkerCluster.css',
        'assets/leaflet.markercluster/dist/MarkerCluster.Default.css'
    ], 'public/css/app.css','public');

    mix.version(['css/guest.css', 'js/guest.js', 'css/app.css', 'js/app.js']);

    mix.copy('public/assets/mapbox.js/images', 'public/build/css/images')
        .copy('public/css/guest.css.map', 'public/build/css/guest.css.map')
        .copy('public/css/app.css.map', 'public/build/css/app.css.map')
        .copy('public/js/guest.js.map', 'public/build/js/guest.js.map')
        .copy('public/js/app.css.map', 'public/build/js/app.js.map');

});
