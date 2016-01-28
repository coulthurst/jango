(function () {
    'use strict';

    angular.module('Jango', [
        'ngMaterial',
        'ngRoute',
        'firebase'
    ]);
    
    angular.module('Jango').constant('fbURL', 'https://brilliant-fire-3120.firebaseio.com/');
    
    angular.module('Jango').factory('Posts', function($firebase, fbURL) {
        return $firebase(new Firebase(fbURL))
    });

    angular.module('Jango').run();
})();
