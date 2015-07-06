'use strict';

angular.module('mbcManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item.end', {
        // make default id
        url: '/end',
        templateUrl: 'app/manage/item/end/end.html',
        controller: 'ManageItemEndCtrl',
      });
  });
