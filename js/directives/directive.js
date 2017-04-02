/* global angular */
angular.module("seppukuArts")
.directive("mummerstale", function() {
    return {
        templateUrl: "templates/mummerstale.html", 
        controller: "applicationCtrl",
        replace: true
    };
});

angular.module("seppukuArts")
.directive("news", function() {
   return {
       templateUrl: "templates/news.html",
       controller: "applicationCtrl",
       replace: true
   } 
});

angular.module("seppukuArts")
.directive("abeyance", function() {
   return {
       templateUrl: "templates/abeyance.html",
       controller: "applicationCtrl",
       replace: true
   } 
});