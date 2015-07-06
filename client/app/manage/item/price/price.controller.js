'use strict';

angular.module('mbcManagerApp')
  .controller('ManageItemPriceCtrl', function ($scope, $state, myItem) {

    $scope.item = myItem.items[0];

    $scope.newPrice = $scope.item.buyItNowPrice;

    
  });
