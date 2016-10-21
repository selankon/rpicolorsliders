'use strict';

/**
 * @ngdoc function
 * @name rpicolorslidersApp.controller:SlidersCtrl
 * @description
 * # SlidersCtrl
 * Controller of the rpicolorslidersApp
 */
angular.module('rpicolorslidersApp')
  .controller('SlidersCtrl', ['$scope', '$sce', '$mdMedia', 'slidersService', 'config',
    function ($scope, $sce, $mdMedia, slidersService, config) {

      // INIT COLOR SLIDER
      $scope.color = {
        red : Math.floor(Math.random() * (256) + 0) ,
        green :  Math.floor(Math.random() * (256) + 0),
        blue :  Math.floor(Math.random() * (256) + 0)
      };

      // Image logo configs
      $scope.linkLogo = $sce.trustAsResourceUrl(config.LINKLOGO);
      $scope.url = {
        linkLogo : $scope.linkLogo,
        imgLogo : config.LOGOIMG
      };

      // Watch sliders changes
      $scope.$watch('color.red', function(newVal, oldVal){
        // console.log("Scope red value: " + newVal + " , oldVal: " + oldVal);
        slidersService.changeValue("red" , newVal);
      })
      $scope.$watch('color.green', function(newVal, oldVal){
        slidersService.changeValue("green" , newVal);
        // console.log("Scope green value: " + newVal + " , oldVal: " + oldVal);
      })
      $scope.$watch('color.blue', function(newVal, oldVal){
        slidersService.changeValue("blue" , newVal);
        // console.log("Scope blue value: " + newVal + " , oldVal: " + oldVal);
      })

      // Check if the screen is small to change classed
      $scope.$watch(function() { return $mdMedia('xs'); }, function(big) {
           $scope.screenIsSmall = big;
        });

  }]);
