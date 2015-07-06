'use strict';

angular.module('mbcManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item.quantity', {
        url: '/quantity',
        templateUrl: 'app/manage/item/quantity/quantity.html',
        controller: 'ManageItemQuantityCtrl',
      });
  });
