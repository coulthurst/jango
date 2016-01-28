angular.module('Jango').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html",
        controller: "MainController"
    })
    .when("/aww", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/fitness", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/food", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/funny", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/gaming", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/history", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/movies", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/music", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/nature", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
     .when("/news", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/science", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/sports", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/television", {
        templateUrl: "partials/posts.html",
        controller: "ViewTopicController"
    })
    .when("/savePost", {
        templateUrl: "partials/savePost.html",
        controller: "SaveTextController"
    })
    .when("/logIn", {
        templateUrl: "partials/logIn.html",
        controller: "LogInController"
    })
        .when("/viewPost/:topicId/:postId", {
            templateUrl: "partials/viewPost.html",
            controller: "ViewPostController"
    })
    .when("/404", {
        templateUrl: "partials/404.html",
        controller: "MainController"
    });
}]);