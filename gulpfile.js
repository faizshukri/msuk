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
    mix.styles([
        'assets/normalize-css/normalize.css',
        'assets/bootstrap/dist/css/bootstrap.min.css',
        'assets/mapbox.js/mapbox.css'
    ], 'public/css/app.css','public').version('css/app.css');

    mix.copy('public/assets/mapbox.js/images', 'public/build/css/images')
        .copy('public/css/app.css.map', 'public/build/css/app.css.map');
});
