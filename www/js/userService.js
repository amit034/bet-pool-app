angular.module('UserService', ['LocalStorageModule'])
.factory('UserService', function($rootScope, $http, localStorageService) {
  var service = {
    createUser: function(user) {
      $http.post('http://50', {  }, { i})
      .success(function (data, status, headers, config) {

 
      })
      .error(function (data, status, headers, config) {
        
      });
    }
  };
  return service;
})
