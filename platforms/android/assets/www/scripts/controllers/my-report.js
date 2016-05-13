'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyReportCtrl', function ($scope,$rootScope,$location,$http) {
    
    
    $scope.reportUrl = $rootScope.reportUrl;

});
