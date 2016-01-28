(function () {
    'use strict';


    angular.module('Jango').controller('ViewPostController', ['$scope', '$firebaseObject',
    function ($scope, $firebaseObject) {

        var ref = new Firebase('https://brilliant-fire-3120.firebaseio.com/');
        var usersRef = ref.child('users');
        var href = window.location.href;
        var post = (href.substr(href.lastIndexOf('viewPost') + 8));
        var postId = ref.child(post);
        var comments = postId.child('comments');
        var authData = ref.getAuth();
        $scope.post = $firebaseObject(postId);

        $scope.comments = $firebaseObject(comments);

        $scope.saveComment = function () {
            var text = $scope.comment.text;
            var time = Firebase.ServerValue.TIMESTAMP;
            var commentRef = comments.push();
            var authData = ref.getAuth();
            var user = authData.google.displayName;

            commentRef.set({
                author: user,
                text: text,
                id: commentRef.key(),
                votes: 0,
                date: time

            });
            $scope.comment = "";
        }


    }]);

        angular.module('Jango').run();
})();