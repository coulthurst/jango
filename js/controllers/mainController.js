
(function () {
    'use strict';


    angular.module('Jango').controller('MainController', ['$scope', '$mdSidenav', '$firebaseObject',
        function ($scope, $mdSidenav, $firebaseObject) {

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    }
   
        
}]);

angular.module('Jango').run();

})();
