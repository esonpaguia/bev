angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider

      .when('/', {
          templateUrl: 'app/views/pages/welcome.html'
      })

      .when('/login', {
          templateUrl: 'app/views/pages/login.html'
      })

      .when('/home', {
          templateUrl: 'app/views/pages/home.html'
      })

      .when('/logout', {
          redirectTo: '/'
      })

  $locationProvider.html5Mode(true);

});
