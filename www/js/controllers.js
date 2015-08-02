angular.module('ionic-http-auth.controllers', [])
.controller('AppCtrl', function($scope, $state, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
      $scope.loginModal = modal;
    },
    {
      scope: $scope,
      animation: 'slide-in-up',
      focusFirstInput: true
    }
  );
  //Be sure to cleanup the modal by removing it from the DOM
  $scope.$on('$destroy', function() {
    $scope.loginModal.remove();
  });
})
  
.controller('LoginCtrl', function($scope, $http, $state, AuthenticationService ) {
  
  var vm = this;
 
  vm.login = function() {
            vm.dataLoading = true;
			AuthenticationService.login(vm.username, vm.password);  
  };
  
  vm.switchToRegister = function(){
	  $('.login').hide();
	  $('.register').show();
  }
  $scope.$on('event:auth-loginRequired', function(e, rejection) {
    console.log('handling login required');
    $scope.loginModal.show();
  });
 
  $scope.$on('event:auth-loginConfirmed', function(e,user) {
	 $scope.username = null;
	 $scope.password = null;
     $scope.loginModal.hide();
  });
  
  $scope.$on('event:auth-login-failed', function(e, status) {
    var error = "Login failed.";
    if (status == 401) {
      error = "Invalid Username or Password.";
    }
    $scope.message = error;
    vm.dataLoading = false;
  });
 
  $scope.$on('event:auth-logout-complete', function() {
    console.log("logout complete");
    $state.go('app.home', {}, {reload: true, inherit: false});
  });    	
})
 
.controller('HomeCtrl', function($rootScope, $scope, $timeout) {
})

.controller('RegisterController', function($rootScope, $scope, $timeout) {
	var vm = this;
	vm.switchToRegister = function(){
	  $('.login').show();
	  $('.register').hide();
    }
})
.controller('CustomerCtrl', function($scope, $state, $http, localStorageService) {
    $scope.customers = [];
    user =  localStorageService.get('userData');
    $http.get('http://50.17.193.14:3000/api/games')
        .success(function (data, status, headers, config) {
            $scope.customers = data;
        })
        .error(function (data, status, headers, config) {
            console.log("Error occurred.  Status:" + status);
        });
})
 
.controller('LogoutCtrl', function($scope, AuthenticationService) {
    $scope.$on('$ionicView.enter', function() {
      AuthenticationService.logout($scope.user);
    });
})