'use strict';

/**
 * @ngdoc service
 * @name rpicolorslidersApp.slidersService
 * @description
 * # slidersService
 * Service in the rpicolorslidersApp.
 */
angular.module('rpicolorslidersApp')
  .service('slidersService', function ($http, config) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.changeValue = function (color, value) {
      var base = config.API
      // console.log("Sending GET: color-> ", color, " value-> ", value);
      return $http.get (base , {params:{"color": color, "value": value}} )
      .then (function (response){
        console.log("Backend Response: ", response);
      });
    };
  });
