'use strict';

/**
 * @ngdoc directive
 * @name rpicolorslidersApp.directive:slidersDirective
 * @description
 * # slidersDirective
 */
angular.module('rpicolorslidersApp')
  .directive('slidersdirective', function () {
    return {
      templateUrl: 'scripts/directives/slidersDirectiveTemplate.html',
      restrict: 'A',
      // scope: {
      //   color.red : '=',
      //   color.green : '=',
      //   color.blue : '='
      // }

    };
  });
