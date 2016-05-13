'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyReportListCtrl', function ($scope,$rootScope,$location,$http) {
    
    if(!$rootScope.isUserLogin){
        $location.path('/login');
    }

    $scope.orderList=[];
    $scope.order={};
    $scope.reportUrl = $rootScope.downloadUrl+"downloadReport?orderNumber="
    if($rootScope.userProfile.role=='advisor')
        $scope.orderLoginId = $rootScope.orderLoginId;
    else
        $scope.orderLoginId = $rootScope.userProfile.id;

    $scope.isListScreen = true;   
    if($rootScope.mockMode){
        $scope.orderList = [];
    }else
        $http({
            url:$rootScope.hostUrl+'getOrderListByStatus',
            method:'POST',
            data:{
                'loginId':$scope.orderLoginId,
                'status': 'D'
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get order list success');
                $scope.orderList = data.body;
            }).error(function(data,header,config,status){
                console.log('get order list fail');
                
        });

        $scope.selectOrder = function(orderNumber){
            $rootScope.reportUrl = $rootScope.downloadUrl+"downloadReport?orderNumber="+orderNumber;
            $location.path('/my-report');
        };
});
