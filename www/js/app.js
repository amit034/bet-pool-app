// ionic-http-auth was made from the ionic-starter-app sideMenu
// to create a new app, at a command prompt type this: ionic start appname sideMenu

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionic-http-auth' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ionic-http-auth.controllers' is found in controllers.js
// 'ionic-http-auth.services is' found in services.js
angular.module('ionic-http-auth', [
  'ionic',
  'LocalStorageModule',
  'ionic-http-auth.services',
  'ionic-http-auth.controllers','UserService'])

  

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: "/home",
	    views: {
	      'menuContent' :{
	          controller:  "HomeCtrl",
	          templateUrl: "templates/home.html"            	
	      }
	  }      	  
    })
    .state('app.customers', {
      url: "/customers",
      cache: false,
	    views: {
	      'menuContent' :{
	          controller:  "CustomerCtrl",
	          templateUrl: "templates/customers.html"            	
	      }
	  }      	  
    })
    .state('app.logout', {
      url: "/logout",
      views: {
    	   'menuContent' :{
    	controller: "LogoutCtrl",
           templateUrl: "templates/home.html"
         }
      } 
    });
  $urlRouterProvider.otherwise("/app/home");
});
