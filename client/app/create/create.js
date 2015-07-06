'use strict';

angular.module('mbcManagerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl'
      });
  });