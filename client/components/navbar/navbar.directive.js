'use strict';

angular.module('mbcManagerApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'EA',
      controller: 'NavbarCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });