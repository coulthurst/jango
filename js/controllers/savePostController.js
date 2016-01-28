(function () {
    'use strict';


    angular.module('Jango').controller('SavePostController', ['$scope', '$firebaseObject',
            function ($scope, $firebaseObject) {

        var ref = new Firebase('https://brilliant-fire-3120.firebaseio.com/');
        var authData = ref.getAuth();

        $scope.savePost = function () {

                var title = $scope.post.title;
                var url = $scope.post.url;
                var votes = $scope.post.votes;
                var time = Firebase.ServerValue.TIMESTAMP;
                var topic = $scope.post.topic;
    
                var topicsRef = ref.child(topic);
                var newPostsRef = topicsRef.push();
                var authData = ref.getAuth();
                var user = authData.google.displayName;
                

                newPostsRef.set({
                    author: user,
                    id: newPostsRef.key(),
                    title: title,
                    url: url,
                    date: time,
                    votes: 0,
                    topic: topic

                });

                $scope.post = "";
        }
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