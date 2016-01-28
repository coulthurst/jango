(function () {
    'use strict';


    angular.module('Jango').controller('ViewTopicController', ['$scope', '$firebaseObject',
        function ($scope, $firebaseObject) {

            var href = window.location.href;
            var topic = (href.substr(href.lastIndexOf('#') + 1));
            var ref = new Firebase('https://brilliant-fire-3120.firebaseio.com/' + topic);
            var authData = ref.getAuth();
            
            $scope.posts = $firebaseObject(ref);

            $scope.upVote = function (post) {
                post.votes++;
                $scope.posts.$save(post);
            }

            $scope.downVote = function (post) {
                post.votes--;
                $scope.posts.$save(post);
            }



        }]);


    angular.module('Jango').run();
})();