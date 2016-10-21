'use strict';

/**
 * @ngdoc overview
 * @name rpicolorslidersApp
 * @description
 * # rpicolorslidersApp
 *
 * Main module of the application.
 */
angular
  .module('rpicolorslidersApp', [

    'ui.router',
    'ngMaterial'
  ])

  //Config and diferent personalization
  .constant ( "config", {
    'API' : "backend.php",
    // 'API' : "http://localhost/linkeds/backend.php",
    'LOGOIMG' : "images/logo.png",
    'LINKLOGO' : "https://casalerappini.it"
  })

  // Set state routes
  .config(function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
          .state('/', {
            url: '/',
            templateUrl: 'views/sliders.html',
            controller: 'SlidersCtrl'
          })
    $urlRouterProvider.otherwise('/');
  });
