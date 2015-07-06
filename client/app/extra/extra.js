'use strict';

angular.module('mbcManagerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('extra', {
        url: '/extra',
        templateUrl: 'app/extra/extra.html',
        controller: 'ExtraCtrl'
      });
  });