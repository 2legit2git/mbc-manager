'use strict';

angular.module('mbcManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item.price', {
        // make default id
        url: '/price',
        templateUrl: 'app/manage/item/price/price.html',
        controller: 'ManageItemPriceCtrl',
      });
  });
