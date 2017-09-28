angular.module('mainCtrl', [])

.controller('MainController', function($rootScope, $location, Auth, config) {

  console.log('endpointUrl=' + config.endpointUrl);

  var vm = this;

  vm.loggedIn = Auth.isLoggedIn();

  $rootScope.$on('$routeChangeStart', function() {

      vm.loggedIn = Auth.isLoggedIn();

      Auth.getUser()
          .then(function(data) {
              vm.user = data.data;
          });
  });

});
