const angular = require('angular');
const angmaps = require('angular-google-maps');
const logger = require('angular-simple-logger');
const lodash = require('lodash');

const demoApp = angular.module('demoApp', [require('angular-route'), require('angular-resource'), 'uiGmapgoogle-maps']);

require('./services')(demoApp);
require('./trails')(demoApp);
require('./userprofile')(demoApp);
require('./auth')(demoApp);
require('./map')(demoApp);

demoApp.config(['$routeProvider', function($rp) {
  $rp
    .when('/trails', {
      templateUrl: 'templates/trails/views/trails_view.html',
      controller: 'TrailsController',
      controllerAs: 'trailsctrl'
    })
    .when('/forecast', {
      templateUrl: 'templates/forecast/views/forecast_view.html',
      controller: 'ForecastController',
      controllerAs: 'forecastctrl'
    })
    .when('/map', {
      controller: 'MapController',
      controllerAs: 'mapctrl'
    })
    .when('/userprofile', {
      templateUrl: 'templates/userprofile/views/userprofile_view.html',
      controller: 'UserprofileController',
      controllerAs: 'userprofilectrl'
    })
    .when('/favorites', {
      templateUrl: 'templates/trails/views/trails_view.html',
      controller: 'TrailsController',
      controllerAs: 'trailsctrl'
    })
    .when('/signup', {
      templateUrl: 'templates/auth_view/auth_view.html',
      controller: 'SignUpController',
      controllerAs: 'authctrl'
    })
    .when('/signin', {
      templateUrl: 'templates/auth_view/auth_view.html',
      controller: 'SignInController',
      controllerAs: 'authctrl'
    })
    .otherwise({
      redirectTo: '/signup'
    });
}]);


demoApp.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyB1digPL08cFa0LVYUQjquWvIXfpwLS3gA',
    v: '3.24',
    libraries: 'weather,geometry,visualization'
  });
}]);
