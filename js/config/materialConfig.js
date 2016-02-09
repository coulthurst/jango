angular.module('Jango').config(function ($mdThemingProvider) {
    var customGreenMap = $mdThemingProvider.extendPalette('green', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customGreen', customGreenMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customGreen', {
          'default': '500',
          'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
          .primaryPalette('grey')
});
