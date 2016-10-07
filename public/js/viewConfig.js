angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
      })
      .state('archive', {
        url: '/archive',
        templateUrl: './views/archive.html',
      });
  });
