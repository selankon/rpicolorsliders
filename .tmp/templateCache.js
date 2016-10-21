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
