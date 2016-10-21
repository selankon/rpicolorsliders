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
  .config(["$stateProvider", "$urlRouterProvider", function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
          .state('/', {
            url: '/',
            templateUrl: 'views/sliders.html',
            controller: 'SlidersCtrl'
          })
    $urlRouterProvider.otherwise('/');
  }]);

'use strict';

/**
 * @ngdoc function
 * @name rpicolorslidersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rpicolorslidersApp
 */
angular.module('rpicolorslidersApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

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

'use strict';

/**
 * @ngdoc service
 * @name rpicolorslidersApp.slidersService
 * @description
 * # slidersService
 * Service in the rpicolorslidersApp.
 */
angular.module('rpicolorslidersApp')
  .service('slidersService', ["$http", "config", function ($http, config) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.changeValue = function (color, value) {
      var base = config.API
      // console.log("Sending GET: color-> ", color, " value-> ", value);
      return $http.get (base , {params:{"color": color, "value": value}} )
      .then (function (response){
        console.log("Backend Response: ", response);
      });
    };
  }]);

angular.module('rpicolorslidersApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/sliders.html',
    "<md-content ng-attr-style=\"background: rgb({{color.red}},{{color.green}},{{color.blue}})\" layout=\"column\" layout-align=\"center center\" layout-margin layout-padding layout-fill flex> <div flex=\"10\"> <i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i> </div> <div slidersdirective flex layout-fill> </div> <!-- <div slidersdirective\n" +
    "   ng-init=\"\n" +
    "    color.red={{initRed}};\n" +
    "    color.green=128;\n" +
    "    color.blue=255\"\n" +
    "    > </div> --> <div flex=\"20\"> <a ng-href=\"{{url.linkLogo}}\"> <img ng-src=\"{{url.imgLogo}}\" class=\"img-fluid\" alt=\"logo\" id=\"logoImg\"> </a> </div> </md-content> <!-- <md-content ng-attr-style=\"background: rgb({{color.red}},{{color.green}},{{color.blue}})\" layout=\"column\" layout-align=\"center center\"  layout-margin layout-padding layout-fill flex>\n" +
    "  <i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>\n" +
    "\n" +
    "  <div id=\"square\">\n" +
    "\n" +
    "\n" +
    "    <div layout=\"row\" layout-align=\"center center\">\n" +
    "      <md-slider-container flex>\n" +
    "        <span ng-attr-style=\"color: rgb({{color.red}},0,0);\" >R</span>\n" +
    "        <md-slider flex min=\"0\" max=\"255\" ng-init=\"color.red=0\" ng-model=\"color.red\" aria-label=\"red\" id=\"red-slider\" class=\"md-primary\">\n" +
    "        </md-slider>\n" +
    "      </md-slider-container>\n" +
    "      <md-input-container flex=\"15\">\n" +
    "        <input flex type=\"number\" ng-model=\"color.red\" aria-label=\"red\" aria-controls=\"red-slider\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div layout=\"row\" layout-align=\"center center\">\n" +
    "      <md-slider-container flex>\n" +
    "        <span ng-attr-style=\"color: rgb(0,{{color.green}},0);\" >G</span>\n" +
    "        <md-slider flex min=\"0\" max=\"255\" ng-init=\"color.green=128\"  ng-init=\"255\" ng-model=\"color.green\"  aria-label=\"green\" id=\"green-slider\" class=\"md-primary\">\n" +
    "        </md-slider>\n" +
    "      </md-slider-container>\n" +
    "\n" +
    "      <md-input-container flex=\"15\">\n" +
    "        <input flex type=\"number\" ng-model=\"color.green\" aria-label=\"green\" aria-controls=\"green-slider\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div layout=\"row\" layout-align=\"center center\">\n" +
    "      <md-slider-container flex>\n" +
    "        <span ng-attr-style=\"color: rgb(0,0,{{color.blue}});\">B</span>\n" +
    "        <md-slider flex  min=\"0\" max=\"255\" ng-init=\"color.blue=255\"  ng-model=\"color.blue\" aria-label=\"blue\" id=\"blue-slider\" class=\"md-primary\">\n" +
    "        </md-slider>\n" +
    "      </md-slider-container>\n" +
    "      <md-input-container flex=\"15\">\n" +
    "        <input flex type=\"number\" ng-model=\"color.blue\" aria-label=\"blue\" aria-controls=\"blue-slider\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</md-content> -->"
  );

}]);
