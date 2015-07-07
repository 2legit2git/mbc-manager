'use strict';

angular.module('mbcManagerApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }, {
      'title': 'Extra',
      'state': 'extra',
      'admin': true
    }, {
      'title': 'Create',
      'state': 'create',
      'admin': true
    }, {
      'title': 'Manage',
      'state': 'manage',
      'admin': true
    }, {
      'title': 'Admin',
      'state': 'admin',
      'admin': true
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
