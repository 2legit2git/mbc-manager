'use strict';

angular.module('mbcManagerApp')
  .controller('ManageItemPicsCtrl', function ($scope, $state, myItem) {

    $scope.item = myItem.items[0];


    $scope.newPrice = $scope.item.buyItNowPrice;

    
  });
