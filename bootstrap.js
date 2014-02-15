(function() {

  function configure($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
  }

  var angularApplications = document.getElementsByClassName('ng-application');
  for (var applicationIndex = 0; applicationIndex < angularApplications.length; applicationIndex++) {
    var angularApplicationElement = angularApplications[applicationIndex];
    var angularApplicationName = angularApplicationElement.getAttribute('application-name');

    angular.module(angularApplicationName).config([
      '$httpProvider',
      configure
    ]);
    angular.bootstrap(angularApplicationElement, [
      angularApplicationName
    ]);
  }
})();
