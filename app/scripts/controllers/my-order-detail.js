'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyOrderDetailCtrl', function ($scope,$rootScope,$location,$http) {


     $scope.selectOrder = function(orderNumber){
            if($rootScope.mockMode){
                $scope.order = {};
            }else
                $http({
                    url:$rootScope.hostUrl+'getOrderByNumber',
                    method:'POST',
                    data:{
                        'orderNumber':orderNumber
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        console.log('get order details success');
                        $scope.order = data.body;
                    }).error(function(data,header,config,status){
                        console.log('get order details fail');
                
                });
        };
        $scope.selectOrder($rootScope.orderNumber);

  });
