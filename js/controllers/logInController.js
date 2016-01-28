(function () {
    'use strict';

    angular.module('Jango').controller('LogInController', ['$scope', '$firebaseObject',
        function ($scope, $firebaseObject) {

            var ref = new Firebase('https://brilliant-fire-3120.firebaseio.com/');

            $scope.logIn = function () {

                ref.authWithOAuthPopup("google", function (error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {

                        console.log("Authenticated successfully with payload:", authData);
                    }
                    $scope.authData = authData;
                });


            }
            
        }]);

angular.module('Jango').run();
})();